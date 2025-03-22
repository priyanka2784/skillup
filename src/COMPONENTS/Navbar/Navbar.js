import React, { useState } from "react";
import "./styles.css";
import logo from "../../Assets/images/skillup.png";
// import profile from "../../assets/images/profileicon.png";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const Navbar = ({ UserRole }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" },
    { title: "AboutUs", path: "/about" },
    { title: "ContactUs", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="MY logo" />
      </div>
      <input
        type="text"
        placeholder="search...."
        value={searchTerm}
        onChange={handleSearchChange}
        style={StyleSheet.searchInput}
      />
      <div className="Navbarlinkcontainer">
        {links.map((item) => {
          return (
            <p
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.title}
            </p>
          );
        })}
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
