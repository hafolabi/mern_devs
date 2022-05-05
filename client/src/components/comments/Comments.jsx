import moment from "moment";
import { useContext, useState } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../context/Context";
import './comments.css'

const Comments = ({ c }) => {
  const { user } = useContext(Context);
  const [commentEditMode, setCommentEditMode] = useState(false);
  const [ newCommentEdit,  setNewCommentEdit] = useState('')

  const commentEdit = async (id)=>{
    try{
        await axiosInstance.put('/comments/' + id, {
            comment: newCommentEdit
        })
        setCommentEditMode(false)
        window.location.reload()
    }catch(err){} 
  }

  const commentDelete = async (id)=>{
      try{
        await axiosInstance.delete('/comments/' + id, {
            data: { username: user.username }
        })
        window.location.reload()
      }catch(err){}
  }
  
  return (

    <div key={c?._id}>
      <div className="singlePostCommentBox">
        {commentEditMode ? (
           <div className="commentEditMode">
           <input
             type="text"
             placeholder="Update your comment..."
             className="CommentEditInput"
             defaultValue={c.comment}
             autoFocus={true}
             onChange={(e) => setNewCommentEdit(e.target.value)}
           />
           <button className="CommentEditButton" onClick={()=> commentEdit(c?._id)}>
             Update!
           </button>

           <span className="commentEditClose" onClick={() => setCommentEditMode(false)}>x</span>
         </div>
        ) : (
          <>
            {c?.username === user?.username && (
              <div className="commentEdit">
                <i
                  className="commentEditIcon fa-solid fa-pen-to-square"
                  onClick={() => setCommentEditMode(true)}
                ></i>
                <i className="commentEditIcon fa-solid fa-trash-can" onClick={()=> commentDelete(c?._id)}></i>
              </div>
            )}

            <div className="singlePostCommentBoxDesc">
              <span className="commentedUser">
                Reader: <b>{c?.username}</b>
              </span>
              <span className="commentedTime">
                {moment(c?.createdAt).fromNow()}
              </span>
            </div>
            <p className="CommentDesc">{c?.comment}</p>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Comments;
