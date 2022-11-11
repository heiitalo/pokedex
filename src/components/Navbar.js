import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoImg = "https://i.imgur.com/rcfnJj9.png";
  return (
    
      <nav>
        <Link to="/">
          <img src={logoImg} alt="logo pokemon" className="navbar-img" />
        </Link>
      </nav>
    
  );
};

export default Navbar;
