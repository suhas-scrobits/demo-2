import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { signUpWithGoogle } from "../api/auth";

function SignWithGoogle() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   // load the Google API Client Library
  //   gapi.load("auth2", () => {
  //     // initialize the Google OAuth client
  //     gapi.auth2
  //       .init({
  //         client_id:
  //           "334811094063-g29vhtndnefg64on21b6gu96kf5uf11e.apps.googleusercontent.com",
  //         scope: "email profile",
  //       })
  //       .then(() => {
  //         // check if the user is already signed in
  //         const googleAuth = gapi.auth2.getAuthInstance();
  //         setIsSignedIn(googleAuth.isSignedIn.get());

  //         // listen for changes to the user's authentication status
  //         googleAuth.isSignedIn.listen((isSignedIn) => {
  //           setIsSignedIn(isSignedIn);
  //           if (isSignedIn) {
  //             // get the user's profile information
  //             const userProfile = googleAuth.currentUser
  //               .get()
  //               .getBasicProfile();
  //             setProfile({
  //               name: userProfile.getName(),
  //               email: userProfile.getEmail(),
  //             });
  //           } else {
  //             setProfile(null);
  //           }
  //         });
  //       });
  //   });
  // }, []);

  const handleSignIn = async () => {
    try {
      // show the Google sign-in popup to the user
      const data = await gapi.auth2.getAuthInstance().signIn();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      // sign the user out of Google
      await gapi.auth2.getAuthInstance().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(profile);

  return (
    <div>
      <button onClick={handleSignIn}>sign in with google</button>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default SignWithGoogle;
