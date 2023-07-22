import CrowLogo from "./../../assets/logo.svg";
import HeroImage from "../../assets/HeroImage.png";
import "../../styles/AdminPage.css"; // Import the CSS for the split-screen layout if needed.

// import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import callverifyOtpApi from '../../backend/verifyOtp-backend'
import EnterOtp from "../../components/resetPassword/EnterOtp";
interface OtpScreenProps {
  // Add any props if needed for OtpScreen component
}

interface OtpFormData {
  otp: string; // Add the 'otp' field to the form data interface
}

interface apiBodyType{
  email: string
  otp: string
}

const OtpScreen: React.FC<OtpScreenProps> = () => {
  // const [otp, setOtp] = useState<string>("");
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

  const onSubmit = async(data: { otp: any }) => {
    //OTP handling

    // Calling Backend

    const userEmail = sessionStorage.getItem('email');

    const body : apiBodyType = {
      email: userEmail || '',
      otp: data.otp
    }

    console.log(body);
    
    
    try{
      const response = await callverifyOtpApi(body)
      console.log(response);
      sessionStorage.setItem('otp', data.otp);
      navigate("/userLogin");
    }
    catch(err){
      console.log((err as Error).message);
      setError("otp", {
        type: "manual",
        message: "Wrong OTP",
      });
    }

    // setTimeout(() => {
    //   if (data.otp !== "123456") {
    //     setError("otp", {
    //       type: "manual",
    //       message: "Wrong OTP",
    //     });
    //   } else {
    //     console.log("OTP submitted:", data.otp);
    //     navigate("/userLogin");
    //   }
    // }, 1000);
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
          <img src={CrowLogo} alt="Hero Image" />
          <text className="text3">Admin Login</text>
          <text className="text4">Please enter your credentials below</text>
          <form onSubmit={handleSubmit(onSubmit)}>
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
