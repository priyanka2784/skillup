import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../COMPONENTS/Sidebar";

// Import all course data
import htmlData from "../Courses/htmlData";
import cssData from "../Courses/cssData";
import javaData from "../Courses/javaData";
import pythonData from "../Courses/pythonData";
import reactData from "../Courses/reactData";

const courseMapping = {
  html: htmlData,
  css: cssData,
  java: javaData,
  python: pythonData,
  react: reactData,
};

const CoursePage = () => {
  const { courseName } = useParams(); // Get course name from URL
  const courseData = courseMapping[courseName?.toLowerCase()]; // Match course data
  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic

  // Handle case when course name is incorrect
  if (!courseData) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar for topic selection */}

      {/* Content Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>{courseData.title}</h1>
        {selectedTopic ? (
          <div>
            <h2>{selectedTopic.name}</h2>
            <p>{selectedTopic.content}</p>
          </div>
        ) : (
          <p>Select a topic to view the content.</p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
