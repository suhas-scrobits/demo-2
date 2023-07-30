import logo from "./../../assets/logo.svg";
import HeroImage from "./../../assets/HeroImage.png";
import Login from "./../../components/login/Login.tsx";
import "./../../styles/adminPage.css"; // Import the CSS for the split-screen
import { Divider } from "antd";

// import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
// import { auth } from '../../services/firebaseConfig';
// import callGoogleApi from '../../backend/googleLogin-backend'

function User() {
  // interface my_obj{
  //   email: string
  //   googleAuthId: string
  // }

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
  // const buttonStyle = {
  //   backgroundColor: 'orange',
  //   border: 'none'
  // };

  // const handleGoogleLogin = async() =>{
  //   try{
  //     const providerRes = new GoogleAuthProvider();
  //     const res = await signInWithPopup(auth, providerRes)

  //     const body: my_obj = {
  //       email: res.user.email || "",
  //       googleAuthId: res.user.uid
  //     }

  //     console.log(body);

  //     const result = await callGoogleApi(body);
  //     console.log(result);
  //     alert("Login successful")
  //     navigate("/Dashboard");
  //   }
  //   catch(err: any){
  //     console.log(err.message);
  //   }
  // }

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

          <text className="text3">Welcome !</text>
          <text className="text4">Please enter your credentials below</text>
        </div>
        <Login showForgotPassword={true} redirect="User" />
        <Divider plain style={dividerStyle}>
          <span style={orStyle}>OR</span>
        </Divider>
        {/* <Button style={buttonStyle} type="primary" onClick={handleGoogleLogin}>Login with Google</Button> */}

        <div className="bottom-right">
          <text className="text5">Don't have an account?</text>
          <a href="/userSignup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default User;
