import React from "react";
import "../styles/AnalyticsDashboard.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Registering ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticsDashboard = () => {
  // Mock Data for Charts
  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Users",
        data: [500, 800, 1200, 1500, 1800, 2200],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
      },
    ],
  };

  const userEngagementData = {
    labels: ["Page Views", "Clicks", "Sign-ups", "Downloads"],
    datasets: [
      {
        label: "User Engagement",
        data: [4000, 2500, 1800, 1200],
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  const deviceUsageData = {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#007bff", "#28a745", "#ffc107"],
      },
    ],
  };

  const sessionDurationData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Avg Session Duration (mins)",
        data: [5, 6.2, 7.5, 8, 7.8, 8.5],
        borderColor: "#ff5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h2>Analytics Dashboard</h2>

      {/* Key Metrics */}
      <div className="analytics-metrics">
        <div className="metric-card">
          <h3>Total Users</h3>
          <p>10,500</p>
        </div>
        <div className="metric-card">
          <h3>Active Users</h3>
          <p>3,200</p>
        </div>
        <div className="metric-card">
          <h3>New Users</h3>
          <p>1,200</p>
        </div>
        <div className="metric-card">
          <h3>Retention Rate</h3>
          <p>85%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="analytics-charts">
        <div className="chart-container">
          <h3>User Growth Over Time</h3>
          <Line data={userGrowthData} />
        </div>
        <div className="chart-container">
          <h3>User Engagement Metrics</h3>
          <Bar data={userEngagementData} />
        </div>
        <div className="chart-container">
          <h3>Device Usage Distribution</h3>
          <Pie data={deviceUsageData} />
        </div>
        <div className="chart-container">
          <h3>Session Duration Trends</h3>
          <Line data={sessionDurationData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
