import React, { useState } from "react";
import { loginWithEmailPassword, signupWithEmailPassword } from "../api/auth";
import SignWithGoogle from "./SignWithGoogle";

function Login() {
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
    loginWithEmailPassword(formData);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" flex flex-col space-y-4 border border-solid border-black p-4">
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="enter the email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="enter the password"
        />
        <button onClick={login} className="bg-blue-400 p-2 rounded">
          Login
        </button>

        <SignWithGoogle />
      </div>
    </div>
  );
}

export default Login;
