import './header.css'

export default function Header() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Christian Women</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img src={PF + "/headerImg.jpg"} alt="" className="headerImg" />
    </div>
  )
}
