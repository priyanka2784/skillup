import "./styles.css";
function HomePage() {
  return (
    <div className="basecontainer">
      <div className="basecontainer1">
        <div className="imagebasecontainer1">
          {
            <img
              src={require("../../Assets/images/onlinelearn.jpg")}
              alt="image"
            />
          }
        </div>
        <div className="contentbasecontainer1"></div>
      </div>
      <div className="basecontainer2">
        <div className="contentbasecontainer2"></div>
        <div className="imagebasecontainer2">
          <img src={require("../../Assets/images/elearning.png")} />
        </div>
      </div>
      <div className="basecontainer3"></div>
    </div>
  );
}
export default HomePage;
