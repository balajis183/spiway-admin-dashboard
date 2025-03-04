import React, { useState } from "react";
import "../styles/UserList.css";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastSeen: "2 hours ago" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive", lastSeen: "5 days ago" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "User", status: "Active", lastSeen: "30 minutes ago" },
  { id: 4, name: "Emily White", email: "emily@example.com", role: "Editor", status: "Active", lastSeen: "1 day ago" },
  { id: 5, name: "David Johnson", email: "david@example.com", role: "User", status: "Inactive", lastSeen: "3 weeks ago" },
  { id: 6, name: "Sophia Lee", email: "sophia@example.com", role: "Admin", status: "Active", lastSeen: "Just now" },
  { id: 7, name: "Daniel Martinez", email: "daniel@example.com", role: "User", status: "Active", lastSeen: "4 hours ago" },
  { id: 8, name: "Olivia Taylor", email: "olivia@example.com", role: "Editor", status: "Inactive", lastSeen: "2 days ago" },
  { id: 9, name: "James Anderson", email: "james@example.com", role: "User", status: "Active", lastSeen: "10 minutes ago" },
  { id: 10, name: "Emma Wilson", email: "emma@example.com", role: "Admin", status: "Active", lastSeen: "5 minutes ago" }
];

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRole === "All" || user.role === filterRole)
  );

  return (
    <div className="users-container">
      <h2>User List</h2>

      {/* Search and Filter Row */}
      <div className="users-controls">
        <input 
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label>Filter by:</label>
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="All">All</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
        </select>
      </div>

      {/* User Table */}
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
              <td>{user.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
