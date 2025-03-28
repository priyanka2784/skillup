import React from "react";
const ProfilePage = ({ userType }) => {
  return (
    <div>
      <h2>Profile overview</h2>
      {userType === "reader" ? (
        <>
          <h3>Completed Courses</h3>
          <ul>
            <li>Course 1</li>
            <li>Course 2</li>
          </ul>
          <h3>In Progress Courses</h3>
          <ul>
            <li>Course A</li>
            <li>Course B</li>
          </ul>
        </>
      ) : (
        <>
          <h3>New Created Courses</h3>
          <ul>
            <li>Course X</li>
            <li>Course Y</li>
          </ul>
        </>
      )}
    </div>
  );
};
export default ProfilePage;
