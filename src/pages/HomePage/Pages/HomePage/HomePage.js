// import React, { useState } from "react";
// import Navbar from "../../../../COMPONENTS/Navbar/Navbar";
// import logo1 from "../../../../Assets/images/logo1.png";
// import logo2 from "../../../../Assets/images/logo2.png";
// import java from "../../../../Assets/images/java.svg";
// import logo4 from "../../../../Assets/images/logo4.png";
// import logo5 from "../../../../Assets/images/logo5.png";
// import logo6 from "../../../../Assets/images/logo6.png";
// import "./styles.css";
// import { FaSearch } from "react-icons/fa";
// import Card from "../../../../Card/Card";
// import img from "../../../../Assets/images/homeimg.png";
// import CustomButton from "../../../../COMPONENTS/customButton/customButton";
// import { useNavigate } from "react-router-dom";
// import ImageSlider from "../../../../COMPONENTS/ImageSlider";
// import Sidebar from "../../../../COMPONENTS/Sidebar";
// import Footer from "../../../../COMPONENTS/Footer/Footer";
// import htmlData from "../../../../Courses/htmlData";
// import cssData from "../../../../Courses/cssData";
// import cppData from "../../../../Courses/cppData";
// import javaData from "../../../../Courses/javaData";
// import pythonData from "../../../../Courses/pythonData";
// import reactData from "../../../../Courses/reactData";

// const HomePage = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const navigate = useNavigate();

//   const allCourses = [
//     {
//       name: "HTML",
//       data: htmlData,
//       img: logo1,
//       bgcolor: "#f0dde7",
//       description: "Language for structuring web pages",
//     },
//     {
//       name: "CSS",
//       data: cssData,
//       img: logo2,
//       bgcolor: "#ddeaf0",
//       description: "Language to design web pages",
//     },
//     {
//       name: "Java",
//       data: javaData,
//       img: java,
//       bgcolor: "#d7f0e7",
//       description: "A Programming Language",
//     },
//     {
//       name: "React",
//       data: reactData,
//       img: logo4,
//       bgcolor: "#ffffC5",
//       description: "Build dynamic UIs",
//     },
//     {
//       name: "Python",
//       data: pythonData,
//       img: logo5,
//       bgcolor: "#ffff",
//       description: "A Programming Language",
//     },
//     {
//       name: "Cpp",
//       data: cppData,
//       img: logo6,
//       bgcolor: "#e7dff0",
//       description: "A Programming Language",
//     },
//   ];

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchInput(value);
//     const results = allCourses.filter((course) =>
//       course.name.toLowerCase().includes(value)
//     );
//     setFilteredCourses(value ? results : []);
//   };

//   const handleView = () => {
//     navigate("/courses");
//   };

//   return (
//     <div className="homePage">
//       <h1 className="title"> Empower Your Learning Journey </h1>
//       <p className="subtitle">
//         Your gateway to mastering technology and beyond
//       </p>

//       <div className="searchBarContainer">
//         <div className="searchBarInputContainer">
//           <input
//             type="text"
//             placeholder="Search our courses e.g. Python"
//             value={searchInput}
//             onChange={handleSearch}
//           />
//         </div>
//         <div className="searchBarButtonContainer">
//           <FaSearch />
//         </div>
//       </div>

//       <img
//         src={img}
//         alt="homepage img"
//         className="h-img"
//         style={{ width: "80%", height: "80vh" }}
//       />

//       <div className="homeContainer">
//         {(filteredCourses.length > 0 ? filteredCourses : allCourses).map(
//           (course, index) => (
//             <Card
//               key={index}
//               title={course.name}
//               description={course.description}
//               bgcolor={course.bgcolor}
//               imgsrc={course.img}
//               buttonText={`Learn ${course.name}`}
//               onClick={() =>
//                 navigate("/course", {
//                   state: course.data,
//                 })
//               }
//             />
//           )
//         )}
//       </div>

//       <div className="view">
//         <CustomButton
//           title="View all Courses"
//           onClick={handleView}
//           backgroundColor="#0f9"
//           color="#000"
//         />
//       </div>

//       <div>
//         <ImageSlider />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// HomePage.js
import React, { useState, useEffect } from "react";
import Navbar from "../../../../COMPONENTS/Navbar/Navbar";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
import Card from "../../../../Card/Card";
import img from "../../../../Assets/images/homeimg.png";
// import CustomButton from "../../../../COMPONENTS/customButton/customButton";
import CustomButton from "../../../../COMPONENTS/customButton/customButton";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../../../COMPONENTS/ImageSlider";
import { onValue, ref } from "firebase/database";
import { database } from "../../../../firebase";

// Static course imports
import htmlData from "../../../../Courses/htmlData";
import cssData from "../../../../Courses/cssData";
import cppData from "../../../../Courses/cppData";
import javaData from "../../../../Courses/javaData";
import pythonData from "../../../../Courses/pythonData";
import reactData from "../../../../Courses/reactData";
import logo1 from "../../../../Assets/images/logo1.png";
import logo2 from "../../../../Assets/images/logo2.png";
import java from "../../../../Assets/images/java.svg";
import logo4 from "../../../../Assets/images/logo4.png";
import logo5 from "../../../../Assets/images/logo5.png";
import logo6 from "../../../../Assets/images/logo6.png";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const navigate = useNavigate();

  const staticCourses = [
    {
      name: "HTML",
      data: htmlData,
      img: logo1,
      bgcolor: "#f0dde7",
      description: "Language for structuring web pages",
    },
    {
      name: "CSS",
      data: cssData,
      img: logo2,
      bgcolor: "#ddeaf0",
      description: "Language to design web pages",
    },
    {
      name: "Java",
      data: javaData,
      img: java,
      bgcolor: "#d7f0e7",
      description: "A Programming Language",
    },
    {
      name: "React",
      data: reactData,
      img: logo4,
      bgcolor: "#ffffC5",
      description: "Build dynamic UIs",
    },
    {
      name: "Python",
      data: pythonData,
      img: logo5,
      bgcolor: "#ffff",
      description: "A Programming Language",
    },
    {
      name: "Cpp",
      data: cppData,
      img: logo6,
      bgcolor: "#e7dff0",
      description: "A Programming Language",
    },
  ];

  const allCourses = [...staticCourses, ...newCourses];

  useEffect(() => {
    const courseRef = ref(database, "courses");
    onValue(courseRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedCourses = Object.values(data).map((course) => ({
          name: course.courseTitle,
          description: course.courseDescription,
          data: course.content,
          bgcolor: "#fefefe",
          img: logo6, // default image for new ones
        }));
        setNewCourses(fetchedCourses);
      }
    });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
    const results = allCourses.filter((course) =>
      course.name.toLowerCase().includes(value)
    );
    setFilteredCourses(value ? results : []);
  };

  const handleView = () => {
    navigate("/courses");
  };

  return (
    <div className="homePage">
      <h1 className="title">Empower Your Learning Journey</h1>
      <p className="subtitle">
        Your gateway to mastering technology and beyond
      </p>

      <div className="searchBarContainer">
        <div className="searchBarInputContainer">
          <input
            type="text"
            placeholder="Search our courses e.g. Python"
            value={searchInput}
            onChange={handleSearch}
          />
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
        {(filteredCourses.length > 0 ? filteredCourses : allCourses).map(
          (course, index) => (
            <Card
              key={index}
              title={course.name}
              description={course.description}
              bgcolor={course.bgcolor}
              imgsrc={course.img}
              buttonText={`Learn ${course.name}`}
              onClick={() => navigate("/course", { state: course.data })}
            />
          )
        )}
      </div>

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
    </div>
  );
};

export default HomePage;
