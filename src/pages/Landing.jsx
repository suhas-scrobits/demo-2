import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to={"/login"}>login</Link>
    </div>
  );
}

export default Landing;