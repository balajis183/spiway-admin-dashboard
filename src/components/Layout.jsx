import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/Layout.css"; // Ensure styles are included

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
