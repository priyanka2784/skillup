import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import profileImg from "../../../../Assets/images/profileimg.png";
import "./profile.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase();
      const userRef = ref(db, "users/" + user.uid);

      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        } else {
          console.log("No user data found");
        }
      });
    }
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.href = "/home";
    });
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-container">
        <h2>Your Profile</h2>
        <div className="profile-image">
          <img src={profileImg} alt="profile" />
        </div>

        {userData ? (
          <div className="profile-card">
            <p>
              <strong>Name:</strong> {userData.Name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Role:</strong> {userData.role}
            </p>
            {userData.courses && (
              <div className="course-progress">
                <h3> View Your Course Progress: </h3>
                <ul>
                  {Object.entries(userData.courses).map(([course, status]) => (
                    <li key={course}>
                      <strong>{course.toUpperCase()}:</strong>
                      {status}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
