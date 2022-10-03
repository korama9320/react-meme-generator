import React from "react";
import logo from "../assets/images/troll-face.png";
export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div>
          <img src={logo} alt="" />
          <div> Meme Generator</div>
        </div>
        <div>React Course - Project 3</div>
      </nav>
    </>
  );
}
