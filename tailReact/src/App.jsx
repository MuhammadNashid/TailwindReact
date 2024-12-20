import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Nav.jsx";

function App() {
  const [showUserList, setShowUserList] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [selectedDes, setSelectedDes] = useState('All'); // Track the selected category
  
  // Sample user data for different categories
  const users = [
    { name: "Nashid K", des: "Mern"},
    { name: "Salman", des: "Flutter" },
    { name: "Jaimon", des: "Python" },
    { name: "Athila", des: "Mern" },
    { name: "Praveena",des: "Flutter" },
    { name: "Rahul", des: "Python" },
    { name: "Ammu", des: "Mern"},
    { name: "Anandhu", des: "Flutter" },
    { name: "Ramees", des: "Python" },
    { name: "Shaheer", des: "Mern" },
    { name: "Abinandh",des: "Flutter" },
    { name: "Rahman", des: "Python" },
  ];

  // Filter users based on selected category
  const filteredUsers = selectedDes === 'All' 
    ? users 
    : users.filter(user => user.des === selectedDes);

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

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
      <div className="p-4 w-full h-full">
        <div className="d-flex w-full h-full mt-10 mb-10">
          {/* Filter Buttons */}
          <button 
            onClick={() => setSelectedDes('All')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            All
          </button>
          <button 
            onClick={() => setSelectedDes('Mern')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            Mern
          </button>
          <button 
            onClick={() => setSelectedDes('Flutter')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            Flutter
          </button>
          <button 
            onClick={() => setSelectedDes('Python')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            Python
          </button>
          
          {/* Theme toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="text-white hover:text-gray-300"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
          </div>
        </div>

        {/* Render filtered user list in card format */}
        {showUserList && (
          <div className=" mt-4 w-96 h-24 grid sm:grid-cols-3 lg:grid-cols-2xl:grid-cols-4 gap-2 mx-auto">
            {/* <h2 className="text-xl text-center font-semibold mb-4">User List ({selectedCategory})</h2> */}
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <div key={index} className="user-card bg-indigo-200 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-gray-500">{user.des}</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 w-full">
                No users found for this category.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App