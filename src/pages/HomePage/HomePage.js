import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import el from "../../Assets/images/el2.png";
import "./styles.css";
import { Outlet } from "react-router-dom";

// import { CgProfile } from "react-icons/cg";
function HomePage() {
  const UserRole = "both";
  return (
    <div>
      <Navbar UserRole={UserRole} />
      {/* <h1> Welcome to Home Page</h1> */}
      {/* <div className="el">
        <div className="courseContainer"></div>
        <div
          className="courseImageContainer"
          style={{
            backgroundImage: `url(${require("../../Assets/images/el2.png")})`,
          }}
        ></div>
      </div> */}
      <div className="basecontainer3">
        <Outlet />
      </div>
    </div>
  );
}
export default HomePage;
