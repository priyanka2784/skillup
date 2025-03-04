import { useState } from "react";
import CustomInput from "../../COMPONENTS/CustomInput/CustomInput.js";
import COLOR from "../../config/COLOR.js";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
function LoginPage() {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  return (
    <div className="mainbaseconatiner" style={{ height: "100vh" }}>
      <h1>E-LEARNING</h1>
      <div className="loginbasecontainer">
        <div className="ImageContainer">
          <img alt="elearning" />
        </div>

        <div className="textbasecontainer"></div>

        <div className="usernamecontainer">
          <h1>WELCOME</h1>
          <h2>{`First Login Here! ${email}`}</h2>
          <CustomInput
            type={"email"}
            placeholder={"EnterEmail"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              alert(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type="password"
            placeholder="Enter password"
            Icon={FaKey}
            isSecureEntry={"true"}
            inputValue={password}
            onChangeText={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="buttoncontainer">
            <button>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
