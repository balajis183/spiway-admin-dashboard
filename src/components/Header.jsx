import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaBell, FaEnvelope, FaQuestionCircle, FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="title">Spiway Dashboard</h2>
      </div>

      <div className="header-right">
        <label className="theme-switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

        <FaBell className="icon notification-icon" title="Notifications" />
        <FaEnvelope className="icon contact-icon" title="Messages" />
        <FaQuestionCircle className="icon help-icon" title="Help & Support" />
        <Link to="/settings">
          <FaCog className="icon settings-icon" title="Settings" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
