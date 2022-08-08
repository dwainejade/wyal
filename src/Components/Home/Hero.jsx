import React from "react";
import "./Hero.scss";
import "../../styles/button.scss";
import hero_img from "../../assets/images/hero_img.jpg";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <h1 className="hero-title">Where You Are Perinatal</h1>
      <img
        // src="https://everychildthrives.com/wp-content/uploads/2019/01/BMBFA-Janel-Vee-1.png"
        src={hero_img}
        alt="black person breastfeeding"
        className="hero-image"
      />
      <p className="hero-caption">
        Meeting you where you are to acheive your goals.
      </p>
      <button className="button">Get In Touch</button>
    </div>
  );
}
