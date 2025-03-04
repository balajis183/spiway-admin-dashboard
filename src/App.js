import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Analytics from './components/Analytics';
import UserList from './components/UserList';
import Settings from './components/Settings';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/analytics" element={<Analytics />} /> */}
            <Route path="/users" element={<UserList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
