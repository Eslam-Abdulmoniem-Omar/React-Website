import React from "react";
import "./HeroSection.css";

import video from "../videos/video-1.mp4";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} width="750" height="500" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          addStyle="btn-mobile"
          buttonStyle="btn--outline"
          buttonSize="large"
        >
          GET STARTED
        </Button>

        <Button addStyle="btn-mobile" buttonSize="large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
