import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Landing from "../src/pages/Landing";
import Login from "../src/pages/Login";

function RouteConfig() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default RouteConfig;
