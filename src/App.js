import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout"; // Import new Layout
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup/Login without Sidebar/Header */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />

        {/* Protected Routes inside Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="analytics" element={<AnalyticsDashboard />} />
                <Route path="users" element={<UserList />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
