import React, { useState } from "react";
import "./styles.css";
import { auth, database } from "../../firebase";
import ASSETS from "../../Assets";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../COMPONENTS/CustomButton/customButton";
import COLOR from "../../config/COLOR";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { Database, ref, set } from "firebase/database";

function RegisterPage() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setconfirmPassword] = useState("");
  const [buttonText, setbuttonText] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const saveUserDetail = (data) => {
    // set(ref(database, `contentcreator/${data.uid}`), data);
    // set(ref(database, `contentreader/${data.uid}`), data);
    set(ref(database, `users/${data.uid}`), data);

    navigate("/login");
  };

  const handleRegister = async () => {
    try {
      if (
        Name == "" ||
        email == "" ||
        password == "" ||
        ConfirmPassword == "" ||
        role == ""
      ) {
        alert("fill it first");
      } else if (password !== ConfirmPassword) {
        alert("error not match");
      } else {
        setbuttonText("please wait!");
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setbuttonText("Register");
        if (response.user.uid) {
          const userData = {
            uid: response.user.uid,
            email: response.user.email,
            Name: Name,
            role: role,
          };
          saveUserDetail(userData);
        } else {
          alert("failed to register");
          setEmail("");
          setPassword("");
          setconfirmPassword("");
          setName("");
          setRole("");
        }
      }
    } catch (err) {
      setName("");
      setEmail("");
      setPassword("");
      setconfirmPassword("");
      setRole("");
      alert(err);
    }
  };
  return (
    <div
      className="registerpagebasecontainer"
      style={{ backgroundImage: `URL(${ASSETS.RegisterPagebackgroundimg})` }}
    >
      {/* <h1>Skill Up🎚️</h1> */}
      <div className=""></div>
      <div className="registerpagecontentbasecontainer">
        <h1>Create Your Account📚</h1>

        <div className="registerpageformbasecontainer">
          <form>
            <table>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">
                    {" "}
                    UserName:
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">E-mail:</div>
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">
                    Password:{" "}
                  </div>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">
                    ConfirmPassword:
                  </div>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={ConfirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <label>select an option</label>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <select onChange={(e) => setRole(e.target.value)}>
                    <option value="">--up-to-u--</option>
                    <option value="Reader">Content Reader</option>

                    <option value="creator">Content creator</option>
                    <option value="Both"> Both</option>
                  </select>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="registerpagebuttonbasecontainer">
          <CustomButton
            backgroundColor={COLOR.basecolorsecond}
            color={COLOR.blackcolor}
            title={"Register"}
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
