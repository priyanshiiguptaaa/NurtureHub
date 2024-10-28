import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow-md z-50">
      <nav className="h-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex space-x-10">
          <li>
            <Link 
              to="/" 
              className="text-[#8B4513] hover:text-[#4A6741] transition-colors duration-300 text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/community" 
              className="text-[#8B4513] hover:text-[#4A6741] transition-colors duration-300 text-lg"
            >
              Community
            </Link>
          </li>
          <li>
            <Link 
              to="/pregnancy" 
              className="text-[#8B4513] hover:text-[#4A6741] transition-colors duration-300 text-lg"
            >
              Pregnancy
            </Link>
          </li>
          <li>
            <Link 
              to="/baby" 
              className="text-[#8B4513] hover:text-[#4A6741] transition-colors duration-300 text-lg"
            >
              Baby
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <button 
              className="px-6 py-2.5 rounded-full border-2 border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white transition-colors duration-300"
              aria-label="Login"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button 
              className="px-6 py-2.5 rounded-full bg-[#4A6741] text-white hover:bg-[#5B573E] transition-colors duration-300"
              aria-label="Sign Up"
            >
              Sign Up
            </button>
          </Link>
          <div>
            <button 
              className="px-4 py-2 rounded-full bg-[#8B4513] text-white hover:bg-[#5B573E] transition-colors duration-300"
              aria-label="Select Language"
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;