import react from "react";
import "./styles.css";
import CustomButton from "../../../../COMPONENTS/CustomButton/customButton";
import COLOR from "../../../../config/COLOR";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function ContactUsPage() {
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
          <input type="text" placeholder="enter your name" />
        </div>
        <div className="contactusInputContainer">
          <input type="email" placeholder="enter a valid E-mail address" />
        </div>
        <div className="contactusInputContainer">
          <input type="text" placeholder="Enter your message" />
        </div>
        <div className="contactButtonContainer">
          <CustomButton title={"Submit"} backgroundColor={COLOR.basecolor} />
        </div>
      </div>
    </div>
  );
}
export default ContactUsPage;
