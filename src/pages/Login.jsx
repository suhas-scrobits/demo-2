import React, { useState } from "react";
import { loginWithEmailPassword, signupWithEmailPassword } from "../api/auth";

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

  //   function login() {
  //     console.log(formData);
  //     signupWithEmailPassword(formData);
  //   }

  return (
    <div>
      <input type="text" name="email" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
