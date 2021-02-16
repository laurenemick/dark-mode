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
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/charts"><h3>Charts</h3></Link>
      <Link to="/login"><h3>Log In</h3></Link>
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
