import { axiosInstance } from "../../config";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../context/Context";

import Comments from "../comments/Comments";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentRes, setCommentRes] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put("/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };

  useEffect(() => {
    const getComments = async () => {
      const res = await axiosInstance.get("/comments/" + path);
      setComments(res.data);
    };
    getComments();
  }, [path, commentRes]);

  const submitComment = async () => {
    setError(false);
    try {
      const res = await axiosInstance.post("/comments", {
        comment: newComment,
        username: user.username,
        postId: path,
      });
      setCommentRes(res.data);
      setNewComment("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={ post.photo} alt="" className="singlePostImg" />
        ) : (
          <img src={post.avatar} alt="" className="singlePostImg" />
        )}

        {deleteMode && (
          <div className="deleteSinglePost">
            <button className="deleteYess" onClick={handleDelete}>
              Yes
            </button>
            <button className="deleteNoo" onClick={(e) => setDeleteMode(false)}>
              No
            </button>
          </div>
        )}

        {updateMode ? (
          <>
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <div
              className="singlePostUdateClose"
              onClick={(e) => setUpdateMode(false)}
            >
              x
            </div>
          </>
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={() => setDeleteMode(true)}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <>
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="singlePostEditButton" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
  
         {/* COMMENTS SECTION */}
                   
        <div className="singlePostComment">
          {
            comments.map((comment)=>{
             return <Comments key={comment._id} c={comment}  />
            })
          }

          {!user && (
            <span
              style={{ color: "teal", fontFamily: "Varela", fontSize: "14px" }}
            >
              Kindly Login to Write a Comment
            </span>
          )}

          {user && (
            <>
              <input
                type="text"
                placeholder="Write your comment..."
                className="CommentInput"
                value={newComment}
                autoFocus={true}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className="CommentButton" onClick={submitComment}>
                Comment!
              </button>
            </>
          )}

          {error && (
            <span
              style={{
                color: "red",
                marginTop: "20px",
                fontSize: "13px",
                textAlign: "center",
              }}
            >
              Something Went Wrong
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
