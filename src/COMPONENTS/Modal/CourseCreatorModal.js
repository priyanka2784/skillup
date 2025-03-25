import React, { useState } from "react";
import "./modal.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Database, ref, push } from "firebase/database";
import { database } from "../../firebase";
// import { Database } from "../../auth/firebase";

export const CourseCreatorModal = ({ closeModal }) => {
  const [courseTitle, setCoursetitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [content, setContent] = useState("");
  const [buttonText, setButtonText] = useState("Save Course");
  const handleSave = async () => {
    if (courseTitle == "" || courseDescription == "" || content == "") {
      alert("Please! Fill the fields");
    } else {
      setButtonText("Please Wait..");
      await push(ref(database, `/courses`), {
        courseTitle,
        courseDescription,
        content,
      });
      console.log("Course Created: ", { courseTitle, courseDescription });
      closeModal();
      setButtonText("Save Course");
    }
  };
  return (
    <div className="modal-base">
      <div className="modal-content">
        <h2>Create a new Course</h2>
        <label>Title: </label>
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCoursetitle(e.target.value)}
          placeholder="Enter course title"
        />

        <label>Description: </label>
        <input
          type="Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          placeholder="Enter course description"
        />

        <label>Content: </label>
        <ReactQuill value={content} onChange={setContent} />

        <button onClick={handleSave}>Save Course</button>
        <button onClick={closeModal} className="close-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default CourseCreatorModal;
