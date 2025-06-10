import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for theme preference
    return localStorage.getItem('theme') === 'dark';
  });

  // Update HTML class and localStorage on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-md px-6 md:px-40 py-6">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-black dark:text-white ">Kunal Verma 
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 ml-5 py-2 rounded-full bg-white/20 dark:bg-white/10 text-white text-xl hover:bg-white/30 dark:hover:bg-white/20 transition-all"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        </div>
        {/* Theme Toggle Button */}
        

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        

        {/* Menu items */}
        <ul
          className={`md:flex gap-x-10 font-medium ${isOpen ? 'block mt-6' : 'hidden'
            } md:mt-0 md:flex-row md:items-center`}
        >
          {['Home', 'About', 'Resume', 'Project', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative block text-black dark:text-white py-2 md:py-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        
      </div>
    </nav>
  );
};

export default Navbar;
