import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex gap-4 bg-blue-400 justify-end px-12 py-4">
      <Link to={"/login"}>login</Link>
      <Link to={"/signup"}>signup</Link>
    </div>
  );
}

export default Landing;
