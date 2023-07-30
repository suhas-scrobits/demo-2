// import "../mainContent/Main.css";

import Dashboard from "../dashboard/Dashboard";
import AllUsers from "../addUser/AllUsers";
import Gateways from "../Gateways/Gateways"

interface MainProps {
  isMenuOpen: boolean;
  activePage: string
}

const Main: React.FC<MainProps> = ({ isMenuOpen, activePage }) => {
  return (
    <div
      className={`parent-container ${
        isMenuOpen ? "shift-right transitioning" : ""
      }`}
    >
      <div className="right-side">
      {
        activePage === "dashboard" && <Dashboard/>      
      }
      {
        activePage === "gateways" && <Gateways/>
      }
      {
        activePage === "users" && <AllUsers/>
      }
      </div>
    </div>
  );
};

export default Main;
