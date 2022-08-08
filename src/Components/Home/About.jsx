import React from "react";
import "./About.scss";
import about_img from "../../assets/images/about_me.jpg";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-con">
        <h1 className="about-title">About Me</h1>
        <img src={about_img} alt="" className="about-image" />
        <p className="about-caption">
          I’m Leah, since 2019 I’ve been involved in birth work in many forms.
          I’ve attended births and supported parents as a midwife assistant,
          registered nurse, lactation specialist and doula.
          <br />
          <br />
          As a lactation professional, I prioritize the dyads needs and support
          all forms of human milk feeding. As a childbirth educator, I
          prioritize information, awareness and empowerment.
          <br />
          <br />I fully support and welcome all clients however my goal is to
          reduce perinatal, postpartum and infant disparities. This means, I am
          intentional in practicing in ways that center those who are unequally
          served and underrepresented. This includes peoples who are black,
          indigenous, LGBTQIA, teens, disabled etc.
        </p>
        <br />
        {/* <Button text="Work with me" /> */}
      </div>
    </div>
  );
}

export default About;
