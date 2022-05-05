import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../components/context/Context";
import { axiosInstance } from "../../config";
import { useLocation, useHistory } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname.split("/")[2];
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const res = await axiosInstance.get("/users/" + path);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setDesc(res.data.desc);
    };
    getUser();
  }, [path]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSuccess(false);
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      username,
      email,
      userId: user._id,
      password,
      desc,
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
            const response = axiosInstance.put("/users/" + user._id, {
              username,
              email,
              userId: user._id,
              password,
              desc,
              profilePic: downloadURL,
            });
            response.then(function (res) {
              dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
              setSuccess(true);
            });
          });
        }
      );
    } else
      try {
        const res = await axiosInstance.put("/users/" + user._id, updatedUser);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        setSuccess(true);
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
  };

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete("/users/" + path, {
        data: { userId: user._id },
      });
      res.data && history.push("/login");
      dispatch({ type: "LOGOUT" });
    } catch (err) {}
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        {deleteMode && (
          <div className="settingsDeleteMode">
            <span
              style={{
                marginTop: 20,
                fontSize: "15px",
                fontWeight: "Josefin Sans",
                position: "absolute",
                left: "52px",
                color: "rgb(82, 79, 79)",
              }}
            >
              Are you ready for this?
            </span>
            <button className="deleteYes" onClick={handleDelete}>
              Yes
            </button>
            <button className="deleteNo" onClick={() => setDeleteMode(false)}>
              No
            </button>
          </div>
        )}

        <div className="settingsTitle">
          <div className="settingsUpdateTitle">Update your account</div>
          <div
            className="settingsDeleteTitle"
            onClick={() => setDeleteMode(true)}
          >
            Delete account
          </div>
        </div>

        <form className="settingsForm" onSubmit={handleUpdate}>
          <label>Profile Picture</label>
          {success && (
            <span
              style={{ color: "green", marginTop: "20px", textAlign: "center" }}
            >
              Profile has been updated...
            </span>
          )}

          <div className="settingsPP">
            {file ? (
              <img src={URL.createObjectURL(file)} alt="" />
            ) : (
              <img
                src={!user.profilePic ? user.avatar : user.profilePic}
                alt=""
              />
            )}

            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle "></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>About Me</label>
          <input
            type="text"
            value={desc}
            placeholder="tell us about yourself..."
            onChange={(e) => setDesc(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="kindly enter your password or the new password you wish to change to..."
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
