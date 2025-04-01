import React, { useState } from "react";
import "./sidebar.css";
import courseData from "../courseData";
const Sidebar = ({ topics }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  return (
    <div className="sidebarcontainer">
      <h3>Topics List</h3>
      <ul className="topicList">
        {topics.map((topic, index) => (
          <li key={index} onClick={() => setSelectedContent(topic.content)}>
            {topic.title}
          </li>
        ))}
      </ul>
      <div className="contentArea">
        {selectedContent ? (
          <p> {selectedContent} </p>
        ) : (
          <p>Select a Topic to Start Learning.</p>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
