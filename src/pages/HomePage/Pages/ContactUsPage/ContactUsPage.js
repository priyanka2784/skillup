import React from "react";
import "./styles.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Empower your learning journey with engaging courses, interactive
          lessons, and expert guidance. Whether you're a beginner or an advanced
          learner, we provide high-quality educational content tailored to your
          needs.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Info</h3>
          <p>SkillUp</p>
          <p>Gt Road,Gurdaspur,Punjab,India</p>
          <p className="contact-phone">+91 777888 0989</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
