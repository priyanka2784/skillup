import React, { useState } from "react";
import "./styles.css";
import loginimg from "../../Assets/images/loginimg.png";
import {
  faUser,
  faLock,
  faUserTag,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiH4 } from "react-icons/ri";
import CustomButton from "../../COMPONENTS/CustomButton/customButton";
import COLOR from "../../config/COLOR";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("reader");
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Logged In:", userCredential.user);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed:" + error.message);
    }

    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Role:", role);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="img-sec">
          <img src={loginimg} alt="Login" className="l-img" />
        </div>
        {/* <div className="login-box"> */}
        <div className="flex">
          <h2>Welcome to SkillUP!</h2>
          <p>Please, enter your login details to login</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showText ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showText ? faEye : faEyeSlash}
                className="icon"
                onClick={() => setShowText(!showText)}
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faUserTag} className="icon" />
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="reader">Reader</option>
                <option value="creator">Creator</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div className="extra-links">
              <a href="#"> Forgot Password? </a>
            </div>
            {/* <button className="login-btn"> Login</button> */}
            <div className="btn">
              <CustomButton
                title="Login"
                onClick={handleLogin}
                backgroundColor="#0f9"
                color="#000"
              />
            </div>
            <div className="flex2">
              <h4>
                Don't have an account? <a href="register"> Sign Up </a>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
