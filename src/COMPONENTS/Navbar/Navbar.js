import React, { useState } from "react";
import "./styles.css";
import logo from "../../Assets/images/skillup.png";
// import { CgProfile } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
// import profilepage from "../../pages/HomePage/Pages/profile/ProfilePage";
import CourseCreatorModal from "../Modal/CourseCreatorModal";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ UserRole }) => {
  const [showModal, setShowModal] = useState(false);

  const courses = ["html", "css", "javascript", "react", "python", "c++"];

  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" },
    { title: "AboutUs", path: "/about" },
    { title: "ContactUs", path: "/contact" },
    { title: "Books", path: "/product" },
    // { title: "Courses", path: "/courses/: courseName" },
    { title: "Quiz", path: "/Quiz" },
    // { title: "Courses", path: "/courses/ :courseName" },

    courses.map((course) => ({
      title: course.toUpperCase(),
      path: `/courses/${courses}`,
    })),
  ];

  const Books = () => (
    <nav className="navbar">
      <h2>My Book Store</h2>
      <div>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="MY logo" />
      </div>

      <div className="Navbarlinkcontainer">
        {links.map((item, index) => (
          <p key={index} onClick={() => navigate(item.path)}>
            {item.title}
          </p>
        ))}

        {/* {links.map((item) => {
          return (
            <p
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.title} 
        //     </p> */}
        {/* //   );
        // })} */}
      </div>

      <div className="right-section">
        {(UserRole === "creator" || UserRole === "both") && (
          <button className="add-button" onClick={() => setShowModal(true)}>
            +
          </button>
        )}
        {/* // <img src={CgProfile} className="profile-icon" /> */}
        {/* <CgProfile
          size={40}
          className="profile-icon"
          onClick={() => alert("Profile Page")}
        /> */}

        <CgProfile
          size={40}
          className="profile-icon"
          onClick={() => navigate("/profilePage")}
        />

        {showModal && (
          <CourseCreatorModal closeModal={() => setShowModal(false)} />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
