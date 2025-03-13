import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-500 focus:outline-none
                 ${isDarkMode 
                   ? 'bg-opacity-20 bg-yellow-300 hover:bg-opacity-30' 
                   : 'bg-opacity-20 bg-indigo-600 hover:bg-opacity-30'} 
                 backdrop-blur-sm border border-opacity-20 
                 ${isDarkMode ? 'border-yellow-300' : 'border-indigo-600'}
                 transform hover:scale-110 shadow-lg`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        // Sun icon with improved animation
        <svg
          className="w-7 h-7 text-yellow-300 transition-all duration-500 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      ) : (
        // Moon icon with improved animation
        <svg
          className="w-7 h-7 text-indigo-600 transition-all duration-500 animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle; 