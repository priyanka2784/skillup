import react from "react";
import { useState } from "react";
import navbar from "../../../../COMPONENTS/Navbar/Navbar";
import "./styles.css";
import skillup from "../../../../Assets/images/skillup.png";
import Footer from "../../../../COMPONENTS/Footer/Footer";
import VideoPlayer from "../../../../COMPONENTS/VideoPlayer/VideoPlayer";
function AboutUsPage() {
  return (
    <div className="aboutusbaseconatiner">
      <div
        className="aboutrightcontentbasecontainer"
        style={{ textAlign: "center", margin: "0", gap: "30px", padding: "0" }}
      >
        <h1>Welcome to Skillup</h1>
        <h1>Empower your learning journey-Anytime,Anywhere!</h1>
        <div className="aboutUsFeaturesContainer">
          <div className="aboutUsFeatures1Container">
            <h2>Our Mission:-</h2>
            <p>
              Our mission is simple to make learning accessible to all. We are
              passionate about empowering individuals by providing free,
              top-notch educational content that anyone can use to improve their
              knowledge and skills. We want to break down barriers to education
              and make learning an enjoyable, lifelong pursuit.
            </p>
          </div>
          <div className="aboutUsFeatures2Container">
            <h2>What We Offer:-</h2>
            <p>1. A Wide Range of Subjects. </p>
            <p> 2. High-Quality Content.</p>
            <p>3. Flexible Learning.</p>
            <p>4. Interactive Features.</p>
          </div>
          <div className="aboutUsFeatures3Container">
            <h2>Why Choose Us?</h2>
            <p>1. Completely Free.</p>
            <p> 2. No Registration Required.</p>
            <p> 3. Community-Oriented.</p>
          </div>
        </div>
      </div>
      <div className="aboutusVideoSectionContentbasecontainer">
        <VideoPlayer />
      </div>
    </div>
  );
}
export default AboutUsPage;
