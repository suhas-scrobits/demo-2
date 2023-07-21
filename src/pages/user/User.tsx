

import CrowLogo from "./../../assets/CrowLogo.svg";
import HeroImage from "./../../assets/HeroImage.png";
import Login from "./../../components/login/Login.tsx";
import "./../../styles/AdminPage.css"; // Import the CSS for the split-screen 
import { Divider } from "antd";


function User() {
    const dividerStyle = {
        color: "#74788D",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        
        
      };
      const orStyle = {
        color: "#74788D", // Replace with your desired color for the "OR" text
        // Add other styles for "OR" text if needed
      };
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
          <img src={CrowLogo} alt="Hero Image" />

          <text className="text3">Welcome !</text>
          <text className="text4">Please enter your credentials below</text>
        </div>
        <Login showForgotPassword={true} redirect="User"/>
        <Divider plain style={dividerStyle} ><span style={orStyle}>OR</span></Divider>
        <div className="bottom-right">
            <text className="text5">Don't have an account?</text>
            <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default User;
