import { axiosInstance } from "../../config";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([])
  const {user} = useContext(Context);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axiosInstance.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  
  return (
    <div className="sidebar">

      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {user ? (
          <img className="sidebarImg" src={!user?.profilePic ? user?.avatar : user?.profilePic} alt="" />
        ) : (
          <img className="sidebarImg" src= {PF +'/post/avatar.png'} alt="" />
        )}
        
        <p className="sidebarUserDesc">
          {user?.desc}
        </p>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map(cat=>(
        <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
        <li className="sidebarListItem">{cat.name}</li>  
        </Link>
        ))}
      </ul>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW ME</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>
      </div>
    </div>
  );
}
