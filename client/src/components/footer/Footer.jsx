import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <span className="footerText1">
          Blogline &copy; <span style={{fontSize:'11px'}}>All Right Reserved {new Date().getFullYear()}</span>
        </span>
        <span className="footerText2">Developed by theinsights_dev</span>
      </div>
    </div>
  );
}
