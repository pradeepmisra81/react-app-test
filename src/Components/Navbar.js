import React from "react";
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link">
        <a href="/javascript">JavaScript</a>
        <a href="/html">HTML</a>
        <a href="/css">CSS</a>
        <a href="/reactjs">ReactJS</a>
        <a href="/jquery">jQuery</a>
        <a href="/nodejs">Node.js</a>
      </div>
    </div>
  )
}

export default Navbar;