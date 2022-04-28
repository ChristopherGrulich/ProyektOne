import React from "react";
import image from "../img/bobross.jpeg";

export default function Info() {
  return (
    <div className="info">
      <img src={image} alt="Bob Ross" className="image"></img>
      <h2>Bob Ross</h2>
      <p>Artist</p>
      <p>robert.ross@email.com</p>
      <div>
        <a
          href="https://github.com/Latinovits/ProyektOne"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button">Github</button>
        </a>
      </div>
    </div>
  );
}
