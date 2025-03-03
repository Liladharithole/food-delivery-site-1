import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h2>Download Our App</h2>
      <p>Get our app for the best food delivery experience.</p>
      <div className="app-download-buttons">
        <a>
          <img src={assets.app_store} alt="App Store" />
        </a>
        <a>
          <img src={assets.play_store} alt="Play Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
