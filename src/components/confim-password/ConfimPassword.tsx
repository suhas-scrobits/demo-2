import { useForm } from "react-hook-form";
import { useState } from "react";
import "./../../styles/admin.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import callResetPasswordApi from "../../api/resetPasswordApi";
import { useNavigate } from "react-router-dom";

/* eslint-disable */
interface IFormInput {
  password: string;
  confirmPassword: string;
}
// ... (existing imports and code)

interface resetPasswordApiBody {
  password: string;
}

function ConfirmPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //riyal time validation
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    if (passwordValue.length >= 1 && passwordValue.length < 8) {
      setShowPasswordWarning(true);
    } else {
      setShowPasswordWarning(false);
    }
  };
  const [showConfirmPasswordWarning, setShowConfirmPasswordWarning] =
    useState(false);
  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPasswordValue = e.target.value;
    const passwordValue = watch("password");
    if (confirmPasswordValue !== passwordValue) {
      setShowConfirmPasswordWarning(true);
    } else {
      setShowConfirmPasswordWarning(false);
    }
  };
  //

  const onSubmit = async (data: IFormInput) => {
    console.log(data.password);

    // Check if the passwords match
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const body: resetPasswordApiBody = {
      password: data.password,
    };

    try {
      // token = window.location.href.split("/")[4];
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFybmFiZGVlQGdtYWlsLmNvbSIsImlhdCI6MTY5MDUzOTM5MywiZXhwIjoxNzIyMDc1MzkzfQ.bsfQjAHmPef5q-nDkklKKNb_FO-pVB5oGk6dC7da0vk";

      const token = window.location.href.split("/")[4];
      console.log(token);
      const decodedToken = atob(token);
      console.log(decodedToken);

      const response = await callResetPasswordApi(body, decodedToken);

      console.log(response);
      navigate("/userLogin");
      sessionStorage.removeItem("token");
      sessionStorage.setItem("token", response.data.decodedToken);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <form className="adminloginForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="PasswordInput">
        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 8 })}
            className={errors?.password && "LoginWarning"}
            placeholder="********"
            onChange={onPasswordChange} // Add onChange event handler
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
        {showPasswordWarning && (
          <p className="LoginWarning">
            Password must have at least 8 characters
          </p>
        )}
      </div>

      <div className="PasswordInput">
        <label>Confirm Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Field Missing",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className={errors?.confirmPassword && "LoginWarning"}
            placeholder="********"
            onChange={onConfirmPasswordChange}
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
        {errors?.confirmPassword?.type === "required" && (
          <p className="LoginWarning">Field Missing</p>
        )}
        {showConfirmPasswordWarning && (
          <p className="LoginWarning">Passwords do not match</p>
        )}
      </div>

      <input type="submit" value="Login" />
    </form>
  );
}

export default ConfirmPassword;
