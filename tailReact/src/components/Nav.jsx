// Navbar.js
import React from "react";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          My Website
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="text-white hover:text-gray-300">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;