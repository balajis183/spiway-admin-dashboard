import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserList.css";
import { FaHome, FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
        const response = await axios.post(API_URL, { page: 1, limit: 400 });
        setUsers(response.data.users || []);
        setLoading(false);
      } catch (error) {
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
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <p className="error-hint">
          This might be a network issue or a CORS restriction from the API. If the issue persists, try using a Moesif CORS extension.
        </p>
        <a href="https://chromewebstore.google.com/detail/digfbfaphojjndkpccljibejjbppifbc?utm_source=item-share-cb"> Add Moesif extension from here </a> <br />
        <button className="retry-button" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }
  
  return (
    <div className="users-container">
      <h2>Users List</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search users by Name"
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
            <th>USER ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Last Login</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>App Version</th>
          </tr>
        </thead>

        {loading ? (
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="skeleton-row">
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
                <td><div className="skeleton-box"></div></td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{formatLastLogin(user.last_login)}</td>
                <td>{user.created_date}</td>
                <td className={`status ${user.status.toLowerCase().replace(" ", "-")}`}>
                  <span className="status-indicator"></span>
                  {user.status === "DELETE REQUEST" ? "DELETED USER" : user.status}
                </td>
                <td>{user.app_version}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {/* Pagination */}
      {!loading && filteredUsers.length > usersPerPage && (
        <div className="pagination">
          <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
            <FaHome />
          </button>
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            <FaArrowLeft />
          </button>
          
          {Array.from({ length: 5 }, (_, i) => {
            const page = currentPage - 2 + i;
            if (page > 0 && page <= totalPages) {
              return (
                <button
                  key={page}
                  className={currentPage === page ? "active" : ""}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              );
            }
            return null;
          })}
          
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            <FaArrowRight />
          </button>
        </div>
      )}
      
      <p>Total Pages: {totalPages}</p>
    </div>
  );
};

export default UserList;
