import './friends.css'

export default function Friends({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
     </li>
  )
}
