import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        <img src="/images/spiway-icon.png" alt="Spiway Logo" className="toggle-icon" />
        <span className="logo-text">Spiway</span>
      </button>

      <ul className="menu">
        <li>
          <Link to="/dashboard" className="menu-item">
            <FaHome size={24} /> {!isCollapsed && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/users" className="menu-item">
            <FaUser size={22} /> {!isCollapsed && "Users"}
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="menu-item">
            <FaChartBar size={22} /> {!isCollapsed && "Analytics"}
          </Link>
        </li>
        <li>
          <Link to="/settings" className="menu-item">
            <FaCog size={22} /> {!isCollapsed && "Settings"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
