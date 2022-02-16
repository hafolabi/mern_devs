import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ayo Salami</b> and <b>3 other friends</b> have a birthday today``
          </span>
        </div>

        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Infomation</h4>
        <div className="rightbarInfo">

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue"> New York</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue"> Madrid</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue"> single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/profile_pix/1.jfif" alt="" />
            <span className="rightbarFollowingName">Adeola Olad</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/profile_pix/2.jpg" alt="" />
            <span className="rightbarFollowingName">Adeola Olad</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/profile_pix/3.jpg" alt="" />
            <span className="rightbarFollowingName">Adeola Olad</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/profile_pix/4.jpg" alt="" />
            <span className="rightbarFollowingName">Adeola Olad</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/profile_pix/5.jpg" alt="" />
            <span className="rightbarFollowingName">Adeola Olad</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/profile_pix/6.jpg" alt="" />
            <span className="rightbarFollowingName">Adeola Olad</span>
          </div>
        </div>

      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
