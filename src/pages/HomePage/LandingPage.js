import react, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
function LandingPage() {
  const [userRole, setUserRole] = useState("both");

  return (
    <div className="landingPageBaseContainer">
      <div className="landingPageNavbarContainer">
        <Navbar UserRole={userRole} />
      </div>
      <div className="landingPageContentContainer">
        <Outlet />
      </div>
    </div>
  );
}
export default LandingPage;
