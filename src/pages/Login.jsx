import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { loginWithEmailPassword, signupWithEmailPassword } from "../api/auth";
import SignWithGoogle from "./SignWithGoogle";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function login() {
    console.log(formData);
    loginWithEmailPassword(formData).then(() => {
      navigate("/home");
    });
  }

  function signup() {
    signupWithEmailPassword(formData);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" flex flex-col space-y-4 border border-solid border-black p-4 rounded w-1/3">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="enter the email"
          className="border border-solid border-black p-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="enter the password"
          className="border border-solid border-black p-1"
        />
        <button onClick={login} className="bg-blue-400 p-2 rounded">
          Login
        </button>

        <button onClick={signup} className="bg-blue-400 p-2 rounded">
          Sign up
        </button>

        <SignWithGoogle />
      </div>
    </div>
  );
}

export default Login;
