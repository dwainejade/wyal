import React from "react";
import { GrInstagram } from "react-icons/gr";
import { RiMailLine } from "react-icons/ri";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="links">
        <a href="mailto: support@whereyouareperinatal.com">
          <RiMailLine fontSize={40} />
        </a>
        <a href="https://www.instagram.com/whereyouareperinatal">
          <GrInstagram fontSize={34} />
        </a>
      </div>
      <p className="footer-caption">© 2022 Where You Are Perinatal LLC.</p>
    </footer>
  );
}

export default Footer;
