import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../api/auth";

function Home() {
  const [user, setUser] = useState("");

  useEffect(() => {
    try {
      getUserDetails();
    } catch (error) {
      console.log("error from home: ", error);
    }
  }, []);

  return (
    <div className="text-3xl font-bold underline">
      <Link to={"/login"}>login</Link>
    </div>
  );
}

export default Home;
