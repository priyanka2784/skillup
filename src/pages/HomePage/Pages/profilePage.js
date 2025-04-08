// import { useEffect, useState } from "react";
// import React from "react";
// import { getFirestore, collection } from "firebase/firestore";

// import { doc, getDoc } from "firebase/firestore";
// import ProfileDetails from "../../../COMPONENTS/ProfileDetails/ProfileDetails";
// import { App, auth, database } from "../../../firebase";

// const ProfilePage = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const ref = doc(database, "users", user.uid);
//         const snap = await getDoc(ref);
//         if (snap.exists()) setProfile(snap.data());
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>
//       {profile ? <ProfileDetails profile={profile} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default ProfilePage;
