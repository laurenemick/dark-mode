import React from 'react';
import { Link } from "react-router-dom";


import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode');

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/">Home</Link>
      <Link to="/charts">Charts</Link>
      <Link to="/login">Log In</Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
