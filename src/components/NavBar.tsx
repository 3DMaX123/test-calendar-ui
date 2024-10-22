import React, { useState } from 'react';
import "../styles/nav-bar.css";
import {links} from "../constants/links";

const NavBar = () => {
  const [isChoosed, setIsChoosed] = useState("");

  const styleChoosed = {
    backgroundColor: "var(--bg-nav-bar-choosed)"
  }

  const styleRegular = {
    backgroundColor: "var(--bg-nav-bar-links)"
  }

  return (
   <nav className="navbar">
    <p className="header">IMPEKABLE</p>
    <div className="links">
      {links.map((link) => (
        <div
        style={isChoosed === link.text ? styleChoosed : styleRegular}
        className={`link`}
        onClick={() => setIsChoosed(link.text)}>
          {isChoosed === link.text &&
            <div className="stick"></div>
          }
          <img className="icon" src={link.icon} width={16} height={16} alt={link.text} />
          <p className="text" >{link.text}</p>
        </div>
      ))}
    </div>
   </nav>
  )
}

export default NavBar