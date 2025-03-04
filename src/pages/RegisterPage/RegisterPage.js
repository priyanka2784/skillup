import "./styles.css";
function RegisterPage() {
  return (
    <div className="registerpagebasecontainer">
      <h1>Create Your Account</h1>
      <div className="registerpagecontentbasecontainer">
        <h1>Registerpage</h1>
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
                  <input type="text" placeholder="Name" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">E-mail:</div>
                </td>
                <td>
                  <input type="email" placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">
                    Password:{" "}
                  </div>
                </td>
                <td>
                  <input type="password" placeholder="Password" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="registerpageinputbasecontainer">
                    ConfirmPassword:
                  </div>
                </td>
                <td>
                  <input type="password" placeholder="Confirm Password" />
                </td>
              </tr>
              <tr>
                <div className="registerpagebuttonbasecontainer">
                  <button type="submit">Register</button>
                </div>
              </tr>
            </table>
          </form>
        </div>
      </div>
      <div className="registerpageimagebasecontainer"></div>
    </div>
  );
}
export default RegisterPage;
