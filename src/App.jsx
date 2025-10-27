import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Login from "./components/login/Login";
import Signup from "./components/Signup/Signup";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

const App = () => {
  const isAdminLoggedIn = localStorage.getItem("adminToken"); // simple auth check

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/admin-dashboard"
          element={
            isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
