import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Hero.css";
import HeroVid from "../videos/video-1.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video src={HeroVid} autoPlay loop muted />
      <h1>MEMORIES AWAIT</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LETS BEGIN
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
