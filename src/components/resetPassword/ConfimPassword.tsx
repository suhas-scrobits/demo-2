import { useForm } from "react-hook-form";
import { useState } from "react";
import "./../../styles/Admin.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

interface IFormInput {
  Email: string;
  Password: string;
  age: number;
  example: string;
}
interface LoginProps {
  showForgotPassword: boolean;
  redirect: string;
}

function ConfirmPassword({ redirect }: LoginProps) {
  const navigate = useNavigate(); // The useHistory hook gives you access to the history instance that you may use to navigate.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  //password  Visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    console.log(redirect);
    if (redirect === "Admin") {
      // Redirect to the admin page if 'redirect' prop is 'admin'
      navigate("/Dashboard");
      console.log("admin");
    } else if (redirect === "User") {
      // Redirect to the user page if 'redirect' prop is 'user'
      navigate("/Dashboard");
      console.log("user");
    }
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form className="adminloginForm" onSubmit={() => handleSubmit(onSubmit)}>
      <div className="PasswordInput">
        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("Password", { required: true })}
            className={errors?.Password && "LoginWarning"}
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
      {errors?.Password?.type === "required" && (
        <p className="LoginWarning">Field Missing</p>
      )}

      <div className="PasswordInput">
        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("Password", { required: true })}
            className={errors?.Password && "LoginWarning"}
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
      {errors?.Password?.type === "required" && (
        <p className="LoginWarning">Field Missing</p>
      )}

      <input type="Submit" value="Login" />
    </form>
  );
}

export default ConfirmPassword;