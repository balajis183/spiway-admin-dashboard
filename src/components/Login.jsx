import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css"; // Reusing styles
import spiwayLogo from "../assets/icon.png"; // Import Spiway logo

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.email === "" || formData.password === "") {
      setError("All fields are required!");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    setError("");
    // alert("Login Successful! Redirecting to dashboard.");
    setTimeout(() => {
      navigate("/users");
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* 🏆 Spiway Logo */}
        <img src={spiwayLogo} alt="Spiway Logo" className="spiway-logo" />

        {/* 🎉 Welcome Message */}
        <h3 className="welcome-text">Welcome to Spiway!</h3>
        <p className="welcome-subtext">Login to access the dashboard.</p>

        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          New here? <Link to="/signup">Create an account</Link>
        </p>

        {/* 📌 Terms and Conditions */}
        <div className="auth-footer">
          <p>
            By logging in, you agree to our <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
