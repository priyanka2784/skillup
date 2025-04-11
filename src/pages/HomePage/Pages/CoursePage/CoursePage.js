import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../../COMPONENTS/Sidebar";
import "./CourseContent.css";
import COLOR from "../../../../config/COLOR";

function CoursePage() {
  const location = useLocation();
  const data = location.state;
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="course-page">
      <Sidebar topics={data.topics} onSelectTopic={setSelectedTopic} />
      <div className="course-content">
        {data ? (
          <>
            <h1 className="course-title">{data.title || ""}</h1>

            {selectedTopic ? (
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
