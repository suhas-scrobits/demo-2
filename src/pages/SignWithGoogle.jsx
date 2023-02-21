import React from "react";
import { signUpWithGoogle } from "../api/auth";

function SignWithGoogle() {
  function withGoogle() {
    signUpWithGoogle();
  }

  return (
    <div>
      <button onClick={withGoogle}>sign in with google</button>
    </div>
  );
}

export default SignWithGoogle;
