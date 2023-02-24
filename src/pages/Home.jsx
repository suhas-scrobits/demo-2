import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../api/auth";

function Home() {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="text-3xl font-bold underline w-full h-screen flex justify-center items-center text-red-500">
      <p className="p-8 border-2 border-solid border-yellow-400">
        Welcome to Dashboard
      </p>
    </div>
  );
}

export default Home;
