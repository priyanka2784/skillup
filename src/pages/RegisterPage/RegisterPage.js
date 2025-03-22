import React, { useState } from "react";
import "./styles.css";
import { auth, database } from "../../firebase";
import ASSETS from "../../Assets";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../COMPONENTS/customButton/customButton";
import COLOR from "../../config/COLOR";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { Database, ref, set } from "firebase/database";

function RegisterPage() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setconfirmPassword] = useState("");
  const [buttonText, setbuttonText] = useState("");
  const navigate = useNavigate();

  const saveUserDetail = (data) => {
    set(ref(database, `contentcreator/${data.uid}`), data);
    set(ref(database, `contentreader/${data.uid}`), data);
    set(ref(database, `both/${data.uid}`), data);

    navigate("/login");
  };

  const handleRegister = async () => {
    try {
      if (
        Name == "" ||
        email == "" ||
        password == "" ||
        ConfirmPassword == ""
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
          };
          saveUserDetail(userData);
        } else {
          alert("failed to register");
          setEmail("");
          setPassword("");
          setconfirmPassword("");
          setName("");
        }
      }
    } catch (err) {
      setName("");
      setEmail("");
      setPassword("");
      setconfirmPassword("");
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
                  <select>
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
            title={buttonText}
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
