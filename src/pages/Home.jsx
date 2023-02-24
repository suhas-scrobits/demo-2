import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../api/auth";

function Home() {
  const [user, setUser] = useState("");

  return (
    <div className="text-3xl font-bold underline">Welcome to dashboard</div>
  );
}

export default Home;
