import { GoogleLogin, googleLogout } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { signUpWithGoogle } from "../api/auth";

function SignWithGoogle() {
  function handleSignGoogle() {
    signUpWithGoogle();
  }
  return (
    <div>
      <button onClick={handleSignGoogle}>sign in with google</button>
    </div>
  );
}

export default SignWithGoogle;
