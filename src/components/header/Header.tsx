import menu from "../../assets/header/Menu.svg";
import notification from "../../assets/header/notification-bing.svg";
import profilePic from "../../assets/header/admin-profile.svg";
import dropdown from "../../assets/header/drowpdown.svg";
import "./Header.css";
import "./../main/Main.css";
import dashboard from "../../assets/main/dashboard.svg";
import devices from "../../assets/main/devices.svg";
import allusers from "../../assets/main/allUsers.svg";
import events from "../../assets/main/events-and-triggers.svg";
import predictions from "../../assets/main/predictions.svg";
import chevron from "../../assets/main/chevron-down.svg";
import { useState } from "react";
import Main from "../main/Main";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log("clicked");
  };
  const handleMenuItemClick = (page: string) => {
    setActivePage(page);
    console.log(page);
  };

  return (
    <>
      <div className="header-container">
        <div className="left-parent-div">
          <img
            className="menu"
            src={menu}
            alt="menu icon"
            onClick={toggleMenu}
          />
          <h3 className="logo">Crowsensor</h3>
        </div>
        <div className="right-parent-div">
          <img className="bell-icon" src={notification} alt="bell icon" />
          <div className="pic-and-dropdown">
            <img
              className="profilePic"
              src={profilePic}
              alt="profile picture"
            />
            <img className="profile-dropdown" src={dropdown} alt="dropdown" />
          </div>
        </div>
      </div>
      <div className={`left-side ${isMenuOpen ? "open" : ""}`}>
        <div
          className={`left-parent-childs ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("dashboard")}
        >
          <img src={dashboard} alt="Dashboard" />
          <h3 className="title-option-left-side">Dashboard</h3>
          <img className="chevron" src={chevron} alt="" />
        </div>

        <div
          className={`left-parent-childs ${
            activePage === "gateways" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("gateways")}
        >
          <img src={devices} alt="Devices" />
          <h3 className="title-option-left-side">Projects</h3>
        </div>

        <div
          className={`left-parent-childs allUsers ${
            activePage === "users" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("users")}
        >
          <img src={allusers} alt="All Users" />
          <h3 className="title-option-left-side">All Users</h3>
        </div>

        <div
          className={`left-parent-childs ${
            activePage === "events" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("events")}
        >
          <img src={events} alt="Events and Triggers" />
          <h3 className="title-option-left-side">Events and Triggers</h3>
        </div>

        <div
          className={`left-parent-childs ${
            activePage === "predictions" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("predictions")}
        >
          <img src={predictions} alt="Predictions" />
          <h3 className="title-option-left-side">Reports</h3>
        </div>

        <div
          className={`left-parent-childs help-section ${
            activePage === "help" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("help")}
        >
          <img src={predictions} alt="help" />
          <h3 className="title-option-left-side">Help</h3>
          <img className="chevron" src={chevron} alt="" />
        </div>
      </div>
      <div className="tableContent">
        {activePage === "gateways" && (
          <Main isMenuOpen={isMenuOpen} activePage={activePage} />
        )}

        {activePage === "users" && (
          <Main isMenuOpen={isMenuOpen} activePage={activePage} />
        )}
      </div>
    </>
  );
};

export default Header;
