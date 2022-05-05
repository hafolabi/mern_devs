import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <Link className="link" to="/">
            <li className="topListItem">HOME</li>
          </Link>

          <Link className="link" to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>

          <Link className="link" to="/contact">
            <li className="topListItem">CONTACT</li>
          </Link>

          <NavLink className="link" to="/write">
            <li className="topListItem">WRITE</li>
          </NavLink>

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <>
            <Link to={"/settings/" + user._id}>
              <img
                src={!user?.profilePic ? user?.avatar :  user?.profilePic}
                alt=""
                className="topImg"
              />
            </Link>
            <span className="topbarUsername">
              {user.username}
            </span>
          </>
        ) : (
          <ul className="topList">
            <Link className="link" to="/login">
              <li className="topListItem">LOGIN</li>
            </Link>

            <Link className="link" to="/register">
              <li className="topListItem">REGISTER</li>
            </Link>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
