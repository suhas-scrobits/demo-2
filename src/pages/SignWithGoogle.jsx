import { GoogleLogin, googleLogout } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { signUpWithGoogle } from "../api/auth";

function SignWithGoogle() {
  function handleSignGoogle() {
    signUpWithGoogle();
  }
  return (
    <div>
      <button
        onClick={handleSignGoogle}
        className="border border-solid border-green-500 w-full py-2 rounded text-red-500"
      >
        sign in with google
      </button>
    </div>
  );
}

export default SignWithGoogle;
