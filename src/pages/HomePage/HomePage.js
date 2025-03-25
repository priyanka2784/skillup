import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
// import el from "../../Assets/images/el2.png";
import logo1 from "../../Assets/images/logo1.png";
import logo2 from "../../Assets/images/logo2.png";
import logo3 from "../../Assets/images/logo3.png";
import logo4 from "../../Assets/images/logo4.png";
import logo5 from "../../Assets/images/logo5.png";
import logo6 from "../../Assets/images/logo6.png";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
import Card from "../../Card/Card";
import img from "../../Assets/images/homeimg.png";
import { Outlet } from "react-router-dom";

// import { CgProfile } from "react-icons/cg";
function HomePage() {
  const UserRole = "both";
  return (
    <div className="homePage">
      <Navbar UserRole={UserRole} />
      <h1 className="title"> Empower Your Learning Journey </h1>
      <p className="subtitle">
        Your gateway to mastering technology and beyond
      </p>
      <div className="searchBarContainer">
        {/* <div className="search-bar">
          <input type="text" placeholder="Search our courses e.g. Python" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div> */}
        <div className="searchBarInputContainer">
          <input type="text" placeholder="Search our courses e.g. Python" />
        </div>
        <div className="searchBarButtonContainer">
          <FaSearch />
        </div>
      </div>
      <img
        src={img}
        alt="homepage img"
        className="h-img"
        style={{ width: "80%", height: "80vh" }}
      />

      <div className="homeContainer">
        <Card
          className="Card1"
          title="HTML"
          description="Language for structuring web pages"
          buttonText="Learn HTML"
          bgcolor="#f0dde7"
          imgsrc={logo1}
        />
        <Card
          className="Card2"
          title="CSS"
          description="Language to design web pages"
          buttonText="Learn CSS"
          bgcolor="#ddeaf0"
          imgsrc={logo2}
        />
        <Card
          className="Card3"
          title="JavaScript"
          description="A Programming Language"
          buttonText="Learn JS"
          bgcolor="#d7f0e7"
          imgsrc={logo3}
        />
        <Card
          className="Card4"
          title="React JS"
          description="Language to build dynamic and interactive user interfaces"
          buttonText="Learn React"
          bgcolor="#f0f0d7"
          imgsrc={logo4}
        />
        <Card
          className="Card5"
          title="Python"
          description="A Programming Language"
          buttonText="Learn Python"
          bgcolor="#f0f0de"
          imgsrc={logo5}
        />
        <Card
          className="Card6"
          title="C++"
          description="A Programming Language"
          buttonText="Learn C++"
          bgcolor="#e7dff0"
          imgsrc={logo6}
        />
      </div>
    </div>
    // </div>
  );
}
export default HomePage;
