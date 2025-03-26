import react, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
function LandingPage() {
  const [userRole, setUserRole] = useState("both");

  return (
    <div>
      <div>
        <Navbar UserRole={userRole} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default LandingPage;
