import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../../../COMPONENTS/customButton/customButton";
import { push, ref } from "firebase/database";
import { database } from "../../../../firebase";
import COLOR from "../../../../config/COLOR";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [buttontext, setButtontext] = useState("Submit");
  const navigate = useNavigate();
  const handleContact = async () => {
    if (
      email == "" ||
      name == "" ||
      lastName == "" ||
      number == "" ||
      message == ""
    ) {
      alert("fill it first");
    } else {
      setButtontext("wait for a while");
      await push(ref(database, `/contact`), {
        email: email,
        name: name,
        number: number,
        message: message,
      });
      setButtontext("submit");
      setEmail("");
      setName("");
      setlastName("");
      setMessage("");
      setNumber("");
      navigate("/home");
    }
  };

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
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <CustomButton
              backgroundColor={COLOR.basecolorsecond}
              color={COLOR.blackcolor}
              title={buttontext}
              onClick={handleContact}
            />
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
