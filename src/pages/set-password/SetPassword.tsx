import logo from "./../../assets/logo.svg";
import HeroImage from "./../../assets/HeroImage.png";
import ConfirmPassword from "../../components/confim-password/ConfimPassword";
import "./../../styles/adminPage.css"; // Import the CSS for the split-screen layout if needed.

function SetPassword() {
  return (
    <div className="split-screen-container">
      <div className="left-half">
        <div className="left-top-text">
          <text className="text1">
            {" "}
            Welcome to
            <text className="CrowSensor"> CrowSensor</text>
          </text>
          <text className="text2">Monitoring and Analytical Dashboard</text>
        </div>

        <img src={HeroImage} alt="Hero Image" />
      </div>
      <div className="right-half">
        <div className="top-right">
          <img src={logo} alt="Hero Image" />

          <text className="text3">Generate password</text>
          <text className="text4">
            Create an Account and Unlock a World of Possibilities
          </text>
        </div>
        <ConfirmPassword />
      </div>
    </div>
  );
}

export default SetPassword;
