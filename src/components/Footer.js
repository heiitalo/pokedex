import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const githutLog = "https://i.imgur.com/owc8sLl.png";
  const linkedinLog = "https://i.imgur.com/lbZA5Aj.png";
  return (
    <div className="footer">
      <a  target="_blank" href="https://github.com/heiitalo">
        <img src={githutLog} alt="logo github" className="footer-img" />
      </a>
      <a  target="_blank" href="https://www.linkedin.com/in/italovieira1/">
        <img src={linkedinLog} alt="logo linkedin" className="footer-img" />
      </a>
    </div>
  );
};

export default Footer;
