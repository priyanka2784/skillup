import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    console.log("Logged in UID:", user?.uid);

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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>
      {userData ? (
        <div>
          <p>
            <strong> Welcome:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          {/* Add more fields if available in your database */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
