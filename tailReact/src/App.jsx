// App.js
import React, { useState, useEffect } from "react"
import './App.css'
import Navbar from "./components/Nav.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Check localStorage for the user's theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Update body class based on the theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <div className="p-4">
        
      </div>
    </div>
  );
}

export default App;