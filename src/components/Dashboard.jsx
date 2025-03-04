import React from "react";
import "../styles/Dashboard.css";
import { FaUsers, FaDownload, FaChartLine, FaDollarSign } from "react-icons/fa";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <FaDownload className="stat-icon" />
          <div className="stat-info">
            <h3>Total Installs</h3>
            <p>10,235</p>
          </div>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div className="stat-info">
            <h3>Active Users</h3>
            <p>5,678</p>
          </div>
        </div>

        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <div className="stat-info">
            <h3>Installs Today</h3>
            <p>120</p>
          </div>
        </div>

        <div className="stat-card">
          <FaDollarSign className="stat-icon" />
          <div className="stat-info">
            <h3>Revenue</h3>
            <p>$4,567</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <Chart />  {/* Ensure you have a Chart.js file for this to work */}
      </div>
    </div>
  );
};

export default Dashboard;
