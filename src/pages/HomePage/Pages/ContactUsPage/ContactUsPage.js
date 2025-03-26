import react, { useState } from "react";
import "./styles.css";
import CustomButton from "../../../../COMPONENTS/CustomButton/customButton";
import COLOR from "../../../../config/COLOR";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { set, ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { database } from "../../../../../src/firebase";

function ContactUsPage() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [textarea, setTextarea] = useState("");
  const [buttonText, setbuttonText] = useState("Submit");
  const navigate = useNavigate();
  const handleContact = async () => {
    if (email == "" || title == "" || textarea == "") {
      alert("fill it first");
    } else {
      setbuttonText("wait for a while");
      await push(ref(database, `/query`), {
        email: email,
        Title: title,
        textarea: textarea,
      });
      setbuttonText("Submit");
      setTitle("");
      setEmail("");
      setTextarea("");
      navigate("/");
    }
  };

  return (
    <div className="contactusbasecontainer">
      <div className="ContactLeftContainer">
        <h1>Contact Us</h1>
        <div className="contactEmailContainer">
          <MdEmail />
          <h1>Email</h1>
          <p>skillup23@gmail.com</p>
        </div>
        <div className="contactPhoneContainer">
          <IoCall />
          <h1>Phone-No:</h1>
          <p>7867566790</p>
          <p>6756453488</p>
        </div>
        <div className="contactMotiveContainer">
          <FaHandPointRight />
          <h1>Motive:</h1>
          <p>Enhance Your skills</p>
        </div>
        <div className="contactOurAddress">
          <IoLocation />
          <h1>Location:</h1>
          <p>Gurdaspur</p>
        </div>
      </div>
      <div className="contactRightContainer">
        <h1>Get in Touch</h1>
        <div className="contactusInputContainer">
          <input
            type="title"
            placeholder="enter your title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="contactusInputContainer">
          <input
            type="email"
            placeholder="enter a valid E-mail address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contactusInputContainer">
          <textarea
            placeholder="enter your Query"
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
        </div>
        <div className="contactButtonContainer">
          <CustomButton
            title={buttonText}
            backgroundColor={COLOR.basecolor}
            onClick={handleContact}
          />
        </div>
      </div>
    </div>
  );
}
export default ContactUsPage;
