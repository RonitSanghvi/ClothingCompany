import React, { useState } from 'react';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='top-0 left-0 right-0 min-h-20 flex flex-row items-center px-20 justify-between bg-gradient-to-t from-black/0 to-black/100'>
      <text className='w-14 h-14 text-1xl text-white'> LOGO HERE </text>
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showSidebar && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={toggleSidebar}></div>
      )}
      <div className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-white backdrop-blur-lg z-50 transform transition-transform ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col justify-center">
          <a href="#" className="text-lg text-gray-700 font-semibold px-5 py-3">Home</a>
          <a href="#" className="text-lg text-gray-700 font-semibold px-5 py-3">Categories</a>
          <a href="#" className="text-lg text-gray-700 font-semibold px-5 py-3">Contact us</a>
          <a href="#" className="text-lg text-gray-700 font-semibold px-5 py-3">Login/Signup</a>
        </div>
      </div>
      <div className="hidden lg:flex">
        <text className='text-lg text-white font-semibold px-5'>
          Home
        </text>
        <text className='text-lg text-white font-semibold px-5'>
          Categories
        </text>
        <text className='text-lg text-white font-semibold px-5'>
          Contact us
        </text>
        <text className='text-lg text-white font-semibold px-5'>
          Login/Signup
        </text>
      </div>
    </div>
  );
}
