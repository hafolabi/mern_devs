import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../components/context/Context";
import { axiosInstance } from "../../config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [progress, setProgress] = useState(false);

  const handleCat = (e) => {
    setCategories(e.target.value.split(","));
  };
  
  const handleSubmit = async (e) => {
    setProgress(true)
    e.preventDefault();
    const newPost = {
      title,
      desc,
      categories,
      username: user.username,
    };
    if (file) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
         () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            const response =  axiosInstance.post("/posts", {
              title,
              desc,
              categories,
              username: user.username,
              photo: downloadURL
            })
            response.then(function(res) { 
           window.location.replace("/post/" + res.data?._id)
          })
        });
      });
    } else
      try {
        const res = await axiosInstance.post("/posts", newPost);
        window.location.replace("/post/" + res.data?._id);
      } catch (err) {}
  };

  return (
    <div className="write">
      {progress && (
          <span className="writeProgress">
           Publishing post...
          </span>
      )}

      {file ? (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      ) : (
        <img src={PF + "/post/4.jpg"} alt="" className="writeImg" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup1">
          <div className="writeFormUpload">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 300,
                color: "teal",
                marginTop: 7,
              }}
            >
              upload image
            </span>
          </div>
              
          <input
            type="text"
            placeholder="Title"
            className="writeInput writeTitle"
            autoFocus={true}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="writeFormGroup2">
          <label className="writeFormCatLabel">
            Enter your category(s) below & end wit a comma ','
          </label>
          <br />
          <input
            type="text"
            required={true}
            className="writeFormCatInput"
            onChange={handleCat}
            placeholder="e.g Music,Style,Tech,..."
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
            required={true}
          ></textarea>
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
