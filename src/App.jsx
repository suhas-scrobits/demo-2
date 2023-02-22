import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignWithGoogle from "./pages/SignWithGoogle";
import RouteConfig from "../routes/RouteConfig";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="334811094063-g29vhtndnefg64on21b6gu96kf5uf11e.apps.googleusercontent.com">
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
