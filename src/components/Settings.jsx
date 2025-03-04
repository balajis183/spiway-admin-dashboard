import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Profile Settings */}
      <div className="settings-section profile-settings">
        <h3>Profile Settings</h3>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <button className="save-btn">Save Changes</button>
      </div>

      {/* Theme Settings */}
      <div className="settings-section">
        <h3>Theme Settings</h3>
        <label className="toggle">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>
      </div>

      {/* Notification Settings */}
      <div className="settings-section">
        <h3>Notification Settings</h3>
        <label className="toggle">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          Enable Email Notifications
        </label>
      </div>

      {/* General Settings */}
      <div className="settings-section">
        <h3>General Settings</h3>
        <div className="input-group">
          <label>Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
