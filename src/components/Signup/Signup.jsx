import React, { useState } from "react";
import "./Signup.css";
import bgImage from "../../assets/Login.jpeg"; 
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/register`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess("Account created successfully!");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      
      <div
        className="signup-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      
      <div className="signup-form-section">
        <form className="glass-form" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>
          <p>Join Twende Tours and start your journey today!</p>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter a username"
            value={formData.username}
            onChange={handleChange}
            required
          />

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
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="254700123456"
            value={formData.phone}
            onChange={handleChange}
          />

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}

          <p className="login-text">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
