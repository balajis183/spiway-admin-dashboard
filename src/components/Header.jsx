import React, { useState } from "react";
import "../styles/Header.css";
import { FaBell, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h2 className="title">Spiway Dashboard</h2>
      </div>

      <div className="header-right">
        <FaBell className="icon notification-icon" />
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon className="icon" /> : <FaSun className="icon" />}
        </div>
        <FaUserCircle className="icon user-icon" />
      </div>
    </header>
  );
};

export default Header;
