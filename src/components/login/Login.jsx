import React, { useState } from "react";
import "./Login.css";
import bgImage from "../../assets/login.jpeg";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user", // default role
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication (replace later with backend)
    const adminCredentials = {
      email: "admin@twendetours.com",
      password: "admin123",
    };

    const userCredentials = {
      email: "user@twendetours.com",
      password: "user123",
    };

    // ✅ Simple validation logic
    if (formData.role === "admin") {
      if (
        formData.email === adminCredentials.email &&
        formData.password === adminCredentials.password
      ) {
        localStorage.setItem("userRole", "admin");
        navigate("/admin-dashboard");
      } else {
        setError("Invalid admin credentials");
      }
    } else if (formData.role === "user") {
      if (
        formData.email === userCredentials.email &&
        formData.password === userCredentials.password
      ) {
        localStorage.setItem("userRole", "user");
        navigate("/dashboard");
      } else {
        setError("Invalid user credentials");
      }
    } else {
      setError("Please select a valid role");
    }
  };

  return (
    <div className="login-container">
      <div
        className="login-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="login-form-section">
        <form className="glass-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <p>Log in to continue your adventure!</p>

          {error && <p className="error-message">{error}</p>}

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Login as:</label>
          <select
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="role-select"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>

          <p className="register-text">
            Don’t have an account? <Link to="/signup">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
