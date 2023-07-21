import logo from "./../../assets/logo.svg";
import HeroImage from "./../../assets/HeroImage.png";
import "../../styles/adminPage.css"; // Import the CSS for the split-screen layout if needed.
import EnterOtp from "../../components/resetPassword/EnterOtp";
// import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface OtpFormData {
  otp: string; // Add the 'otp' field to the form data interface
}

const OtpScreen = () => {
  // const [otp, setOtp] = useState<string>("");
  // const [, setOtp] = useState<string>("");

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<OtpFormData>();
  const navigate = useNavigate();
  // const onChange = (value: string) => {
  //   // Perform any additional validation or processing here if needed
  //   setOtp(value);
  // };

  const onSubmit = (data: { otp: any }) => {
    //OTP handling

    setTimeout(() => {
      if (data.otp !== "123456") {
        setError("otp", {
          type: "manual",
          message: "Wrong OTP",
        });
      } else {
        console.log("OTP submitted:", data.otp);
        navigate("/userLogin");
      }
    }, 1000);
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
          {/* Right-half content */}
          <img src={logo} alt="Hero Image" />
          <text className="text3">Admin Login</text>
          <text className="text4">Please enter your credentials below</text>
          <form onSubmit={() => handleSubmit(onSubmit)}>
            <Controller
              name="otp"
              control={control}
              defaultValue=""
              rules={{
                required: "OTP is required",
                minLength: {
                  value: 6,
                  message: "OTP must be 6 digits",
                },
              }}
              render={({ field }) => (
                <div>
                  <EnterOtp
                    value={field.value}
                    valueLength={6}
                    onChange={field.onChange}
                  />
                  {errors.otp && (
                    <p className="error-message">{errors.otp.message}</p>
                  )}
                </div>
              )}
            />

            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
