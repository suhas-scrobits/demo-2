import { useForm } from "react-hook-form";

import "../../styles/Admin.css";

import { useNavigate } from "react-router-dom";

interface IFormInput {
  Email: string;

  example: string;
}

function EmailForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  //password  Visibility

  const navigate = useNavigate();
  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    navigate("/enterOtp");
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form className="adminloginForm" onSubmit={() => handleSubmit(onSubmit)}>
      <div className="EmailInput">
        <label>Email</label>
        <input
          {...register("Email", {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
          })}
          className={errors?.Email && "LoginWarning"}
          placeholder="Enter your email"
        />
      </div>
      {errors?.Email?.type === "required" && (
        <p className="LoginWarning">This field is required</p>
      )}
      {errors?.Email?.type === "pattern" && (
        <p className="LoginWarning">Valid Email only</p>
      )}

      <input type="Submit" value="Send Code" />
    </form>
  );
}

export default EmailForm;
