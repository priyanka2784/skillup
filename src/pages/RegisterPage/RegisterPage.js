import React, { useState } from "react";
import "./styles.css";
import ASSETS from "../../assets";
import CustomButton from "../../COMPONENTS/customButton/customButton";
import COLOR from "../../config/COLOR";
import { auth } from "../../firebase";
// import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleRegister = async () => {
    alert(email, password);
    await createUserWithEmailAndPassword(auth, email, password);
    
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
                  <input type="text" placeholder="Name" required />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">E-mail:</div>
                </td>
                <td>
                  <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">
                    Password:{" "}
                  </div>
                </td>
                <td>
                  <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
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
            title={"register"}
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
