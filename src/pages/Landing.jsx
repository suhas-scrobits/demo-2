import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex gap-4">
      <Link to={"/login"}>login</Link>
      <Link to={"/home"}>home</Link>
    </div>
  );
}

export default Landing;
