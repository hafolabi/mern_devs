import "./post.css";
import {Link} from 'react-router-dom'

export default function Post({post}) {
  return (
    <div className="post">
     <Link style={{marginTop:10}} to={"/post/"+ post._id} className='link'>
      {!post.photo ? (
        <img src={ post.avatar } alt="" className="postImg" />
      ) :(
      <img src={post.photo} alt="" className="postImg" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(c=>(
              <span className="postCat" key={c}>{c}</span>
          ))}
        </div>
        
        <span className="PostTitle">{post.title}</span>
       
        <span className="postDate">{new Date (post.createdAt).toDateString()}</span>
        <p className='postDesc'>
          {post.desc}
        </p>
      </div>
     </Link>
    </div>
  );
}
