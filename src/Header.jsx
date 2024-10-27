/* eslint-disable no-unused-vars */
// src/Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => (
  <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <button className="text-2xl focus:outline-none">☰</button> {/* Added focus outline for accessibility */}
      <img src="/placeholder.svg" alt="Aashira Logo" className="h-10 w-auto" />
    </div>
    <nav className="hidden md:flex space-x-6 text-aashira-green">
      <Link to="#community" className="hover:text-aashira-dark">Community</Link>
      <Link to="#pregnancy" className="hover:text-aashira-dark">Pregnancy</Link>
      <Link to="/" className="hover:text-aashira-dark">Baby</Link> {/* Linking to the main page */}
      {/* <Link to="#products" className="hover:text-aashira-dark">Products</Link> */}
    </nav>
    <div className="flex items-center space-x-4">
      <button className="text-aashira-green hover:underline focus:outline-none">Login</button>
      <button className="bg-aashira-green text-white px-4 py-2 rounded hover:bg-aashira-dark transition-colors duration-200">Sign up</button>
      <select className="bg-transparent border-none text-aashira-green focus:outline-none">
        <option>EN</option>
        {/* You can add more language options here */}
      </select>
    </div>
  </header>
);

export default Header;
