// import "../mainContent/Main.css";

import TableContent from "./UserTableContent";
import { useState } from "react";

import OrgTableContent from "./OrgTableContent";

const AllUsers = () => {
  const [activeTab, setActiveTab] = useState<"users" | "organization">("users");

  const handleTabChange = (tab: "users" | "organization") => {
    setActiveTab(tab);
  };
  return (
    <div>
      <h3 className="allUsers-title">All Users</h3>

      <div className="toggle-buttons">
        <button
          onClick={() => handleTabChange("users")}
          className={activeTab === "users" ? "active" : ""}
        >
          Users
        </button>
        <button
          onClick={() => handleTabChange("organization")}
          className={activeTab === "organization" ? "active" : ""}
        >
          Organization
        </button>
      </div>

      <hr />

      <div className="tableContent">
        {activeTab === "users" && <TableContent />}
        {activeTab === "organization" && <OrgTableContent />}
      </div>
    </div>
  );
};

export default AllUsers;
