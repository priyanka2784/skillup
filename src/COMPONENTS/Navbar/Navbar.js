import React from "react";
import "./styles.css";
import logo from "../../Assets/images/skillup.png";
// import profile from "../../assets/images/profileicon.png";
import { CgProfile } from "react-icons/cg";
import CourseCreatorModal from "../Modal/CourseCreatorModal";
import { useState } from "react";
const Navbar = ({ UserRole }) => {
  const [showModal, setShowModal] = useState(false);

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
          <button className="add-button" onClick={() => setShowModal(true)}>
            +
          </button>
        )}
        {/* // <img src={CgProfile} className="profile-icon" /> */}
        <CgProfile
          size={40}
          className="profile-icon"
          onClick={() => alert("Profile Page")}
        />
        {showModal && (
          <CourseCreatorModal closeModal={() => setShowModal(false)} />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
