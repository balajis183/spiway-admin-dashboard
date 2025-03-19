import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserList.css";

const API_URL = "https://spiway.in/app/app_users.php";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(API_URL, { page: 1, limit: 200 });
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else if (response.data.users) {
          setUsers(response.data.users);
        } else {
          setUsers([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatLastLogin = (dateString) => {
    if (!dateString) return "No recent activity";
    return dateString; 
  };

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="users-container">
      <h2>Users List</h2>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="desc">Sort by ID: Descending</option>
          <option value="asc">Sort by ID: Ascending</option>
        </select>
      </div>
      
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Created Date</th>
            <th>App Version</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{user.id}</td>
              <td>{user.user_id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td className={
                user.status === "ACTIVE" 
                  ? "status active" 
                  : user.status === "DELETE REQUEST" 
                  ? "status deleted" 
                  : "status inactive"
              }>
                {user.status === "DELETE REQUEST" ? "Deleted User" : user.status}
              </td>
              <td>{formatLastLogin(user.last_login)}</td>
              <td>{user.created_date}</td>
              <td>{user.app_version}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        {[...Array(totalPages)].map((_, i) => (
          <button 
            key={i + 1} 
            className={currentPage === i + 1 ? "active" : ""} 
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage >= totalPages}>Next</button>
      </div>
      <p>Total Pages: {totalPages}</p>
    </div>
  );
};

export default UserList;
