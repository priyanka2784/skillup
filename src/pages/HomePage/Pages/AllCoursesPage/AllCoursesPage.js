// import React from "react";
// import { useNavigate } from "react-router-dom";

// // Import your local data and assets
// import htmlData from "../../../../Courses/htmlData";
// import cssData from "../../../../Courses/cssData";
// import javaData from "../../../../Courses/javaData";
// import reactData from "../../../../Courses/reactData";
// import cppData from "../../../../Courses/cppData";
// import pythonData from "../../../../Courses/pythonData";
// import logo1 from "../../../../Assets/images/logo1.png";
// import logo2 from "../../../../Assets/images/logo2.png";
// import java from "../../../../Assets/images/java.svg";
// import logo4 from "../../../../Assets/images/logo4.png";
// import logo6 from "../../../../Assets/images/logo6.png";
// import logo5 from "../../../../Assets/images/logo5.png";

// import Card from "../../../../Card/Card";
// // import CourseCard from "../../../../COMPONENTS/Card";
// import "./AllCoursesPage.css";

// const AllCoursesPage = () => {
//   const navigate = useNavigate();

//   const courses = [
//     {
//       name: "HTML",
//       bgcolor: "#CFE",
//       img: logo1,
//       data: htmlData,
//     },
//     {
//       name: "CSS",
//       bgcolor: "#EDD9",
//       img: logo2,
//       data: cssData,
//     },
//     {
//       name: "Java",
//       bgcolor: "#F7E890",
//       img: java,
//       data: javaData,
//     },
//     {
//       name: "React JS",
//       bgcolor: "#91C2BA",
//       img: logo4,
//       data: reactData,
//     },
//     {
//       name: "C++",
//       bgcolor: "#eedd82",
//       bgcolor: "",
//       img: logo6,
//       data: cppData,
//     },
//     {
//       name: "Python",
//       bgcolor: "#EEff",
//       img: logo5,
//       data: pythonData,
//     },
//   ];

//   return (
//     <div className="all-courses-container">
//       <h1>All Courses</h1>
//       <div className="all-courses-grid">
//         {courses.map((course, index) => (
//           <Card
//             key={index}
//             courseName={course.name}
//             bgcolor={course.bgcolor}
//             imgsrc={course.img}
//             buttonText={`Learn ${course.name}`}
//             onClick={() => navigate("/course", { state: course.data })}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllCoursesPage;
// AllCoursesPage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { database } from "../../../../firebase";
import Card from "../../../../Card/Card";
import "./AllCoursesPage.css";

// Static data
import htmlData from "../../../../Courses/htmlData";
import cssData from "../../../../Courses/cssData";
import javaData from "../../../../Courses/javaData";
import reactData from "../../../../Courses/reactData";
import cppData from "../../../../Courses/cppData";
import sqlData from "../../../../Courses/sqlData";
import phpData from "../../../../Courses/phpData";

import pythonData from "../../../../Courses/pythonData";
import logo1 from "../../../../Assets/images/logo1.png";
import logo2 from "../../../../Assets/images/logo2.png";
import java from "../../../../Assets/images/java.svg";
import logo4 from "../../../../Assets/images/logo4.png";
import logo6 from "../../../../Assets/images/logo6.png";
import logo5 from "../../../../Assets/images/logo5.png";
import php from "../../../../Assets/images/php.png";
import sql from "../../../../Assets/images/sql.png";
const AllCoursesPage = () => {
  const navigate = useNavigate();
  const [newCourses, setNewCourses] = useState([]);

  const staticCourses = [
    { name: "HTML", bgcolor: "#CFE", img: logo1, data: htmlData },
    { name: "CSS", bgcolor: "#EDD9", img: logo2, data: cssData },
    { name: "Java", bgcolor: "#F7E890", img: java, data: javaData },
    { name: "React JS", bgcolor: "#91C2BA", img: logo4, data: reactData },
    { name: "C++", bgcolor: "#eedd82", img: logo6, data: cppData },
    { name: "Python", bgcolor: "#EEff", img: logo5, data: pythonData },
    { name: "SQL", bgcolor: "#DDF", img: sql, data: sqlData },
    { name: "PHP", bgcolor: "#FFE7C7", img: php, data: phpData },
  ];

  useEffect(() => {
    const courseRef = ref(database, "courses");
    onValue(courseRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedCourses = Object.values(data).map((course) => ({
          name: course.courseTitle,
          bgcolor: "#eaeaea",
          img: logo6, // use default image
          data: course.content,
        }));
        setNewCourses(fetchedCourses);
      }
    });
  }, []);

  const allCourses = [...staticCourses, ...newCourses];

  return (
    <div className="all-courses-container">
      <h1>All Courses</h1>
      <div className="all-courses-grid">
        {allCourses.map((course, index) => (
          <Card
            key={index}
            courseName={course.name}
            bgcolor={course.bgcolor}
            imgsrc={course.img}
            buttonText={`Learn ${course.name}`}
            onClick={() => navigate("/course", { state: course.data })}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
