import react from "react";
import { useState } from "react";
import navbar from "../../../../COMPONENTS/Navbar/Navbar";
import "./styles.css";
import skillup from "../../../../Assets/images/skillup.png";
function AboutUsPage() {
  return (
    <div>
      <section>
        <div className="aboutusbaseconatiner">
          <div
            className="aboutrightcontentbasecontainer"
            style={{ textAlign: "center", margin: "0", gap: "0", padding: "0" }}
          >
            <h1>Welcome to Skillup</h1>
            <p>Empower your learning journey-Anytime,Anywhere!</p>
          </div>
          <div className="aboutleftcontentbasecontainer">
            <div className="aboutContent1Container">
              <p>
                At Skillup, we believe that education should be available to
                everyone, no matter where they are or what their budget is.
                That's why we've created a platform where learners of all ages
                and backgrounds can access a wide range of courses, tutorials,
                and learning resources completely for free. Whether you're
                looking to enhance your skills, explore a new subject, or simply
                learn something fun, we've got you covered!
              </p>
              <h1>Our Mission</h1>
              <p>
                Our mission is simple: to make learning accessible to all. We
                are passionate about empowering individuals by providing free,
                top-notch educational content that anyone can use to improve
                their knowledge and skills. We want to break down barriers to
                education and make learning an enjoyable, lifelong pursuit.
              </p>
              <div className="aboutImageContainer"></div>
            </div>
          </div>
          <div className="aboutbuttoncontainer"></div>
        </div>
      </section>
      <section>
        <div className="aboutusSecondsectionbaseconatiner">
          <div className="aboutusSecondSectionLeftContentbasecontainer">
            <div className="content2AboutusSecondSectionLeftBaseContainer">
              <h1>What We Offer</h1>
              <p>
                1. A Wide Range of Subjects: From programming to languages,
                business to arts, our platform offers a diverse selection of
                courses and tutorials designed to meet the needs of learners at
                all levels.{" "}
              </p>
              <p>
                {" "}
                2. High-Quality Content: All our materials are created by
                industry professionals, educators, and experts in their
                respective fields, ensuring that you get the best learning
                experience.
              </p>{" "}
              <p>
                3. Flexible Learning: Learn at your own pace, whenever and
                wherever you want. Our user-friendly platform allows you to
                access lessons at any time, on any device.
              </p>{" "}
              <p>
                4. Interactive Features: Engage with quizzes, exercises,
                discussion forums, and more to test your knowledge and connect
                with fellow learners.
              </p>
              <h1>Why Choose Us?</h1>
              <p>
                1. Completely Free: Unlike other platforms, we don’t charge a
                penny for our courses. Education should be a right, not a
                privilege.
              </p>
              <p>
                {" "}
                2. No Registration Required: You can access most of our content
                immediately without needing to sign up or create an account.
              </p>
              <p>
                {" "}
                3. Community-Oriented: Join a growing community of learners,
                educators, and professionals who are passionate about
                knowledge-sharing and growth.
              </p>
            </div>
            <div className="image2AboutusSecondSectionLeftBaseContainer"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="aboutusThirdsectionbaseconatiner">
          <div className="aboutusThirdSectionLeftContentbasecontainer">
            <video width="640" height="360" controls>
              <source src="" type="video/mp4" />
              {/* Fallback for unsupported browsers */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUsPage;
