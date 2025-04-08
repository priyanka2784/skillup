import React, { useState } from "react";
import Navbar from "../../../../COMPONENTS/Navbar/Navbar";
// import el from "../../Assets/images/el2.png";
import logo1 from "../../../../Assets/images/logo1.png";
import logo2 from "../../../../Assets/images/logo2.png";
import logo3 from "../../../../Assets/images/logo3.png";
import logo4 from "../../../../Assets/images/logo4.png";
import logo5 from "../../../../Assets/images/logo5.png";
import logo6 from "../../../../Assets/images/logo6.png";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
import Card from "../../../../Card/Card";
import img from "../../../../Assets/images/homeimg.png";
// import CustomButton from "../../../../COMPONENTS/CustomButton/customButton";
import CustomButton from "../../../../COMPONENTS/customButton/customButton";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../../../COMPONENTS/ImageSlider";
import Sidebar from "../../../../COMPONENTS/Sidebar";
import Footer from "../../../../COMPONENTS/Footer/Footer";
import htmlData from "../../../../Courses/htmlData";

// import { CgProfile } from "react-icons/cg";
const HomePage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  // const [topicsList, setTopicsList] = useState([]);

  const navigate = useNavigate();
  const handleLearnClick = (course) => {
    alert("course Selected: ", course);
    setSelectedCourse(course);
    // setTopicsList(topics[language] || []);
  };

  const handleView = () => {
    navigate("/courses");
  };

  // };

  return (
    <div className="homePage">
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
          bgcolor="#f0dde7"
          imgsrc={logo1}
          buttonText="Learn HTML"
          onClick={() =>
            navigate("/course", {
              state: htmlData,
            })
          }
        />
        <Card
          className="Card2"
          title="CSS"
          description="Language to design web pages"
          bgcolor="#ddeaf0"
          imgsrc={logo2}
          buttonText="Learn CSS"
          onClick={() => handleLearnClick("CSS")}
        />
        <Card
          className="Card3"
          title="JavaScript"
          description="A Programming Language"
          bgcolor="#d7f0e7"
          imgsrc={logo3}
          buttonText="Learn JS"
          onClick={() => handleLearnClick("JavaScript")}
        />
        <Card
          className="Card4"
          title="React JS"
          description="Language to build dynamic and interactive user interfaces"
          bgcolor="#ffffC5"
          imgsrc={logo4}
          buttonText="Learn React"
          onClick={() => handleLearnClick("React JS")}
        />
        <Card
          className="Card5"
          title="Python"
          description="A Programming Language"
          bgcolor="#ffff"
          imgsrc={logo5}
          buttonText="Learn Python"
          onClick={() => handleLearnClick("Python")}
        />
        <Card
          className="Card6"
          title="C++"
          description="A Programming Language"
          bgcolor="#e7dff0"
          imgsrc={logo6}
          buttonText="Learn C++"
          onClick={() => handleLearnClick("C++")}
        />
      </div>
      {/* <div className="sidebarContainer">
        {selectedTopic && (
          <Sidebar topic={selectedTopic} topicsList={topicsList} />
        )}
      </div> */}
      <div className="view">
        <CustomButton
          title="View all Courses"
          onClick={handleView}
          backgroundColor="#0f9"
          color="#000"
        />
      </div>

      <div>
        <ImageSlider />
      </div>
      {/* <Outlet /> */}
      {/* {selectedCourse ? (
        <Sidebar topics={courseData[selectedCourse]} />
      ) : (
        <p>Please Select a Course</p>
      )} */}
    </div>
  );
};
export default HomePage;
