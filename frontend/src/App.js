import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // ← Add Link here
import Welcome from './components/Welcome';
import VoteForm from './components/VoteForm';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  return (
    <div className="app-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Navbar - Fixed at Top */}
      <nav className="navbar navbar-dark bg-dark px-3 fixed-top">
        <a className="navbar-brand" href="/">
          <img src="/logo13.jpg" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          {' '}
          Online Voting System
        </a>
        <Link to="/login" className="btn btn-outline-light">Sign In</Link> {/* <-- Used here */}
      </nav>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/vote" element={<VoteForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {/* Footer */}
      <footer className="footer text-white text-center py-3">
        <p className="mb-0">&copy; 2025 Online Voting System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;