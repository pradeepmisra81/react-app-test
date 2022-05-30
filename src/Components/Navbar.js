import React from "react";
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/products">Products</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;