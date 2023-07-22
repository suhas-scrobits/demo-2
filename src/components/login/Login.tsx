import { useForm } from "react-hook-form";
import { useState } from "react";
import "./../../styles/Admin.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import callLoginApi from "../../backend/login-backend";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}
interface LoginProps {
  showForgotPassword: boolean;
  redirect: string;
}

function Login({ showForgotPassword, redirect }: LoginProps) {
  const navigate = useNavigate(); // The useHistory hook gives you access to the history instance that you may use to navigate.
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm<IFormInput>();
  //password  Visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (body: IFormInput) => {
    alert(JSON.stringify(body));

    // Backend call
    try {
      const response = await callLoginApi(body);
      console.log(response);
      if (redirect === "Admin") {
        // Redirect to the admin page if 'redirect' prop is 'admin'
        navigate("/Dashboard");
        console.log("admin");
      } else if (redirect === "User") {
        // Redirect to the user page if 'redirect' prop is 'user'
        navigate("/Dashboard");
        console.log("user");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }; // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  return (
    <form className="adminloginForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="EmailInput">
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
          })}
          className={errors?.email && "LoginWarning"}
          placeholder="Enter your email"
        />
      </div>
      {errors?.email?.type === "required" && (
        <p className="LoginWarning">This field is required</p>
      )}
      {errors?.email?.type === "pattern" && (
        <p className="LoginWarning">Valid Email only</p>
      )}

      <div className="PasswordInput">
        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            className={errors?.password && "LoginWarning"}
            placeholder="********"
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </span>
        </div>
      </div>
      {errors?.password?.type === "required" && (
        <p className="LoginWarning">Field Missing</p>
      )}
      {showForgotPassword && (
        <div className="ForgotPassword">
          <a href="/EmailOtp">Forgot Password?</a>
        </div>
      )}
      <input type="Submit" value="Login" />
    </form>
  );
}

export default Login;
