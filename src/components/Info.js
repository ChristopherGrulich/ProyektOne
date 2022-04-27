import React from "react";
import image from "../img/muhImage.png";

export default function Info() {
  return (
    <div className="info">
      <img src={image} alt="Alien" className="image"></img>
      <h2>Chris Grulich</h2>
      <p>A Dude</p>
      <p>myemail@email.com</p>

      <button id="buttonemail"></button>
      <button id="buttongithub"></button>
    </div>
  );
}
