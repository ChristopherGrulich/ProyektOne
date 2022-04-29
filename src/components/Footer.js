import React from "react";
import fb from "../img/fb128px.png";
import insta from "../img/insta128px.png";

export default function Footer() {
  return (
    <div>
      <a
        href="https://www.facebook.com/TheJoyofPaintingWithBobRoss"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fb} alt="Facebook Icon" className="footericons"></img>
      </a>
      <a
        href="https://www.instagram.com/bobross_thejoyofpainting/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} alt="Instagram Icon" className="footericons"></img>
      </a>
    </div>
  );
}
