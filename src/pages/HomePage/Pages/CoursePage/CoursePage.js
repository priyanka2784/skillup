import React, { useEffect, useState } from "react";
import "./CoursePage.css";
import { data, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../../../COMPONENTS/Sidebar";
import "./CourseContent.css";
import { getDatabase, onValue, get, ref, set } from "firebase/database";
import { RotatingLines } from "react-loader-spinner";
import COLOR from "../../../../config/COLOR";
import { database } from "../../../../firebase";
import Navbar from "../../../../COMPONENTS/Navbar/Navbar";
import CustomButton from "../../../../COMPONENTS/CustomButton/customButton";

function CoursePage() {
  const location = useLocation();
  const data = location.state;
  const db = getDatabase();
  const coursesRef = ref(db, "courses");
  const unsubscribe = onValue(coursesRef, (snapshot) => {
    const firebaseData = snapshot.val();
    if (data) {
      const coursesArray = Object.entries(firebaseData).map(([id, value]) => [
        id,
        value,
      ]);
      setCourses(coursesArray);
    } else {
      setCourses([]);
    }
  });
  const [SelectedTopic, setSelectedTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(data);
  }, []);
  const getCourses = async () => {
    setIsLoading(true);
    const dbRef = ref(database, "courses");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setCourses(Object.values(snapshot.val()));
      setIsLoading(false);
      console.log(snapshot.val());
    } else {
      setIsLoading(false);
      setCourses([]);
      alert("no data found");
    }
  };

  // <div className="courses-container">
  //     <h2>All Courses</h2>
  //     <div className="courses-grid">
  //       {courses.map((course) => (
  //         <div key={course.id} className="course-card">
  //           <h3>{course.title}</h3>
  //           <p>{course.description || "No description available"}</p>
  //           <button>Learn Now</button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>

  return (
    <div className="course-page">
      <Sidebar topics={data.topics} onSelectTopic={setSelectedTopic} />
      <div className="course-content">
        <RotatingLines
          strokeWidth="2"
          width="50"
          strokeColor={COLOR.basecolor}
        />
        {data ? (
          <>
            <h1 className="course-title">{data.title || ""}</h1>

            {SelectedTopic ? (
              <>
                <h2 className="topic-title">{SelectedTopic.name}</h2>
                <pre className="topic-content">
                  {SelectedTopic.content.split("\n").map((line, index) => {
                    let className = "";
                    if (line.trim().toLowerCase() === "example") {
                      className = "example-label";
                    } else if (
                      line.trim().startsWith("<") ||
                      line.trim().startsWith("</") ||
                      line.includes("DOCTYPE")
                    ) {
                      className = "example-block";
                    }

                    return (
                      <div key={index} className={className}>
                        {line}
                      </div>
                    );
                  })}
                </pre>
              </>
            ) : (
              data.topics.map((topic, index) => (
                <div key={index}>
                  <h2 className="topic-title">{topic.name}</h2>
                  <pre className="topic-content">{topic.content}</pre>
                </div>
              ))
            )}
          </>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default CoursePage;
