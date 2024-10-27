import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container animate-fade-in">
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/pregnancy">Pregnancy</Link>
          </li>
          <li>
            <Link to="/baby">Baby</Link>
          </li>
        </ul>

        <div className="auth-buttons">
          <Link to="/login">
            <button className="login" aria-label="Login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup" aria-label="Sign Up">Sign Up</button>
          </Link>
          <div className="language-selector">
            <button aria-label="Select Language">EN</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
