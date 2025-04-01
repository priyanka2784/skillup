import react, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer from "../../COMPONENTS/Footer/Footer";
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
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
export default LandingPage;
