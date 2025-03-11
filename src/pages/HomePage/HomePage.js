import "./styles.css";
function HomePage() {
  return (
    <div className="basecontainer">
      <div className="basecontainer1">
        <div className="contentbasecontainer1">
          <h1>skillup🎚️</h1>
        </div>
        <div className="imagebasecontainer1"></div>
      </div>
      <div className="secondbasecontainer2"></div>
      <div className="basecontainer3">
        <div className="imagebasecontainer3">
          <img src={require("../../Assets/images/elearning.png")} />
        </div>
      </div>
      <div className="basecontainer3"></div>
    </div>
  );
}
export default HomePage;
