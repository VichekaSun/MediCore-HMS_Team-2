import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8 bg-blue-800 p-4"> {/* Removed rounded-xl */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
          /* Changed bg-blue-50 to bg-white */
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center space-x-4">
        {/* Icons on Top Right */}
        <svg
          className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <svg
          className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm3 1h6a1 1 0 100-2H7a1 1 0 100 2z" />
          <path d="M9 11a1 1 0 112 0v5a1 1 0 11-2 0v-5z" />
        </svg>
        <svg
          className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
