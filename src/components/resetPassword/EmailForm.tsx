import { useForm } from "react-hook-form";

import "../../styles/admin.css";

import { useNavigate } from "react-router-dom";
import callOtpApi from "../../backend/sendOtp-backend"

interface IFormInput {
  email: string;
}

function EmailForm() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm<IFormInput>();
  //password  Visibility

  const navigate = useNavigate();
  const onSubmit = async(body: IFormInput) => {
    alert(JSON.stringify(body));
    // console.log(body);
    
    sessionStorage.setItem('email', body.email);
    console.log(sessionStorage.getItem('email'));
    // backend call
    try {
      const response = await callOtpApi(body)
      console.log(response);
      navigate("/enterOtp");
      
    } catch (error) {
      console.log((error as Error).message);
    }

  }; // your form submit function which will invoke after successful validation

  // console.log(watch("example")); // you can watch individual input by pass the name of the input

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

      <input type="Submit" value="Send Code" />
    </form>
  );
}

export default EmailForm;
