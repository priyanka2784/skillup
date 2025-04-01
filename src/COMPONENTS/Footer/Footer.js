import React, { useState } from "react";
import style from "./styles.css";
import youtube from "../../Assets/images/telegram.png";
import telegram from "../../Assets/images/youtube.png";

const Footer = () => {
  // const [telegram, setTelegram] = useState("");
  // const [youtube, setYoutube] = useState("");
  return (
    <footer className="footerBaseClass">
      <div className="FooterBaseContentContainer">
        <div>
          <h2 className="footerHeadingContainer">SkillUp</h2>
          <p className="footerParagraphContainer">
            Enhancing learning through technology.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="footerFavIconLinksContainer">Stay Connected</h3>
          <div className="footerFavIcons">
            <img src={telegram} alt="logo" />
            <img src={youtube} alt="logo" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footerLastContainer">
        &copy; {new Date().getFullYear()} SkillUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
