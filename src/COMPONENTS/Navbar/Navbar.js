import React from "react";
import "./styles.css";
import logo from "../../assets/images/skillup.png";
// import profile from "../../assets/images/profileicon.png";
import { CgProfile } from "react-icons/cg";
const Navbar = ({ UserRole }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="MY logo" />
      </div>
      <div className="Content">
        <a href="#"> Home </a>
        <a href="#"> About </a>
        <a href="#"> Contact Us </a>
      </div>

      <div className="right-section">
        {(UserRole === "creator" || UserRole === "both") && (
          <button className="add-button">+</button>
        )}
        {/* // <img src={CgProfile} className="profile-icon" /> */}
        <CgProfile size={40} className="profile-icon" />
      </div>
    </nav>
  );
};
export default Navbar;
