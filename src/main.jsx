import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import RouteConfig from "../routes/RouteConfig";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      {/* <Route exact path="/" element={<Landing />} /> */}
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  </HashRouter>
);
