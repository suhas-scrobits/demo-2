import { useForm } from "react-hook-form";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./../../styles/admin.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import callLoginApi from "../../api/loginApi";
import { useNavigate } from "react-router-dom";

/* eslint-disable */
interface LoginProps {
  showForgotPassword: boolean;
  redirect: string;
}
interface loginApiBody {
  email: string;
  password: string;
}
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function Login({ showForgotPassword, redirect }: LoginProps) {
  const navigate = useNavigate(); // The useHistory hook gives you access to the history instance that you may use to navigate.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  interface IFormInput {
    email: string;
    password: string;
  }

  const [showPassword, setShowPassword] = useState(false);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const [loading, setLoading] = useState(false); // Set loading to false initially

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  watch("password");

  const onSubmit = async (body: loginApiBody) => {
    setLoading(true);
    sessionStorage.clear();
    // Backend call
    try {
      const response = await callLoginApi(body);
      console.log(response?.message);
      sessionStorage.setItem("token", response.data.jwtToken);
      console.log(sessionStorage.getItem("token"));

      console.log(response);
      if (response?.message === "Login successfully") {
        if (redirect === "Admin") {
          navigate("/Dashboard");
          console.log("admin");
        } else if (redirect === "User") {
          navigate("/Dashboard");
          console.log("user");
        }
        alert("Login successful");
      } else {
        setIncorrectCredentials(true); // Set the state to indicate incorrect credentials
        alert("Login failed");
        console.log(response);
      }
    } catch (error: any) {
      console.log(error.message);
      setIncorrectCredentials(true); // Set the state to indicate incorrect credentials
    } finally {
      setLoading(false); // Stop loading after the response is received
    }
  };

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
          onBlur={handleSubmit(onSubmit)}
        />
      </div>
      {errors?.email?.type === "required" && (
        <p className="LoginWarning">Input required</p>
      )}
      {errors?.email?.type === "pattern" && (
        <p className="LoginWarning">Valid Email only</p>
      )}

      <div className="PasswordInput">
        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 8 })}
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
        <p className="LoginWarning">Input required</p>
      )}
      {errors?.password?.type === "minLength" && (
        <p className="LoginWarning">
          Password must be at least 8 characters long
        </p>
      )}
      {showForgotPassword && (
        <div className="ForgotPassword">
          <a href="/EmailOtp">Forgot Password?</a>
        </div>
      )}
      {incorrectCredentials && ( // Show the message if incorrectCredentials is true
        <p className="LoginWarning">Couldn't find your account</p>
      )}
      {loading ? (
        <button type="submit" disabled className="login-btn-admin">
          <Spin indicator={antIcon} />
        </button>
      ) : (
        <input type="submit" value="Login" className="login-btn-admin" />
      )}
    </form>
  );
}

export default Login;
