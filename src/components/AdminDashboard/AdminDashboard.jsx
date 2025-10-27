import React, { useState } from "react";
import "./AdminDashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Sun,
  Moon,
  LogOut,
  Users,
  BarChart2,
  FileText,
  Calendar,
  User,
  Upload,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);
  const [adminName, setAdminName] = useState("Admin User");
  const [photo, setPhoto] = useState("/src/assets/default-avatar.png"); // default avatar

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  // Sample chart data
  const salesData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 450 },
    { month: "Apr", sales: 500 },
    { month: "May", sales: 380 },
    { month: "Jun", sales: 600 },
  ];

  const userActivity = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 140 },
    { month: "Mar", users: 160 },
    { month: "Apr", users: 200 },
    { month: "May", users: 220 },
    { month: "Jun", users: 250 },
  ];

  const pieData = [
    { name: "Paid", value: 65 },
    { name: "Pending", value: 25 },
    { name: "Cancelled", value: 10 },
  ];

  const COLORS = ["#4CAF50", "#FFC107", "#F44336"];

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : "light"}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="dashboard-title">Twende Tours</h2>
        <ul className="menu">
          <li
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            <BarChart2 size={18} /> Overview
          </li>
          <li
            className={activeTab === "bookings" ? "active" : ""}
            onClick={() => setActiveTab("bookings")}
          >
            <Calendar size={18} /> Bookings
          </li>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            <Users size={18} /> Users
          </li>
          <li
            className={activeTab === "reports" ? "active" : ""}
            onClick={() => setActiveTab("reports")}
          >
            <FileText size={18} /> Reports
          </li>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            <User size={18} /> Profile
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* === Overview Section === */}
        {activeTab === "overview" && (
          <>
            <div className="cards-grid">
              <div className="card">
                <h3>Orders</h3>
                <p>201</p>
                <span className="growth positive">+2.4%</span>
              </div>
              <div className="card">
                <h3>Approved</h3>
                <p>36</p>
                <span className="growth positive">+3.1%</span>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p>$13,520</p>
                <span className="growth negative">-1.2%</span>
              </div>
              <div className="card">
                <h3>Users</h3>
                <p>4,890</p>
                <span className="growth positive">+5.5%</span>
              </div>
            </div>

            <div className="charts-grid">
              <div className="chart-card">
                <h3>Sales Dynamics (2025)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={salesData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#4F46E5" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-card">
                <h3>User Growth</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={userActivity}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#10B981"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-card">
                <h3>Bookings Overview</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {/* === Bookings === */}
        {activeTab === "bookings" && (
          <section className="tab-section">
            <h2>Manage Bookings</h2>
            <p>View, approve, or cancel customer bookings.</p>
          </section>
        )}

        {/* === Users === */}
        {activeTab === "users" && (
          <section className="tab-section">
            <h2>Manage Users</h2>
            <p>View registered users and their activity.</p>
          </section>
        )}

        {/* === Reports === */}
        {activeTab === "reports" && (
          <section className="tab-section">
            <h2>Reports & Analytics</h2>
            <p>Track revenue, growth, and performance insights.</p>
          </section>
        )}

        {/* === Profile Section === */}
        {activeTab === "profile" && (
          <section className="tab-section profile-section">
            <h2>Admin Profile</h2>
            <div className="profile-content">
              <div className="profile-photo">
                <img src={photo} alt="Admin" />
                <label className="upload-btn">
                  <Upload size={18} /> Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    hidden
                  />
                </label>
              </div>

              <div className="profile-details">
                <label>Username</label>
                <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
