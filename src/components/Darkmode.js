import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from 'react';
const Darkmode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark');
    };
  return (
    <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 dark:bg-gray-800 bg-gray-200 text-white p-3 rounded-full shadow-lg dark:hover:bg-gray-700 hover:bg-gray-300 transition duration-300"
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <MdOutlineLightMode className='text-2xl'/> : <MdOutlineDarkMode className='text-2xl text-gray-800' />}
    </button>
  )
}

export default Darkmode