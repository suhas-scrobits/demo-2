import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import {BrowserRouter as Router} from 'react-router-dom';
// import Login from "./components/login/Login.tsx";
// import Admin from "./pages/admin/Admin.tsx";
// import User from "./pages/user/User.tsx";
// import EmailForm from "./components/resetPassword/EmailForm.tsx";
// import AddEmail from "./pages/verifyOtp/AddEmail.tsx";
// import OtpScreen from "./pages/verifyOtp/OtpScreen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
    <App/>
    
  </React.StrictMode>
);
