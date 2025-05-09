import React, { useEffect, useState } from "react";
import Sidebar from "../../../../COMPONENTS/Sidebar";
import "../../../../Courses/courses.css";
import { useLocation } from "react-router-dom";
import "./CourseContent.css";

// function CoursePage({ data }) {
// const [selectedTopic, setSelectedTopic] = useState(null);
function CoursePage() {
  const location = useLocation();
  const data = location.state;
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    console.log("Data received in CoursePage:", data);
  }, [data]);

  return (
    <div className="course-page">
      <Sidebar topics={data?.topics || []} onSelectTopic={setSelectedTopic} />

      <div className="course-content">
        {data ? (
          <>
            <h1 className="course-title">{data.title || ""}</h1>

            {selectedTopic && selectedTopic.content ? (
              <>
                <h2 className="topic-title">{selectedTopic.name}</h2>
                <pre className="topic-content">
                  {selectedTopic.content.split("\n").map((line, index) => {
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
              <p>Please select a topic to view its content.</p>
            )}
          </>
        ) : (
          <p>Loading course data...</p>
        )}
      </div>
    </div>
  );
}

export default CoursePage;
