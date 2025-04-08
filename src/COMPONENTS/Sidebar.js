import React, { useState } from "react";
import "./sidebar.css";
// const Sidebar = ({ topics }) => {
//   const [selectedContent, setSelectedContent] = useState(null);
//   return (
//     <div className="sidebarcontainer">
//       <h3>Topics List</h3>
//       <ul className="topicList">
//         {topics.map((topic, index) => (
//           <li key={index} onClick={() => setSelectedContent(topic.content)}>
//             {topic.name}
//           </li>
//         ))}
//       </ul>
//       <div className="contentArea">
//         {selectedContent ? (
//           <p> {selectedContent} </p>
//         ) : (
//           <p>Select a Topic to Start Learning.</p>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Sidebar;
const Sidebar = ({ topics, onSelectTopic }) => {
  return (
    <div className="sidebarContainer">
      <h3>Topics List</h3>
      <ul className="topicList">
        {topics.map((topic, index) => (
          <li key={index} onClick={() => onSelectTopic(topic)}>
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
