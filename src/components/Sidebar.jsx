import React from 'react';

// Sidebar component now accepts currentPage and onPageChange props
const Sidebar = ({ currentPage, onPageChange }) => {

  const handleNavigationClick = (page) => {
    onPageChange(page);
  };

  const getNavLinkClass = (page) => {
    return `flex items-center p-3 font-semibold transition-colors duration-200 ${
      currentPage === page
        ? 'bg-blue-600 text-white rounded-xl' // Active link: darker blue background, white text, keep rounded for internal elements
        : 'text-gray-200 hover:bg-white hover:text-blue-700 rounded-xl' // Default text color, and hover: white background, blue text, keep rounded for internal elements
    }`;
  };

  return (
    <aside className="w-64 bg-blue-800 shadow-lg p-6 flex flex-col justify-between"> {/* Removed rounded-r-3xl */}
      <div>
        <div className="flex items-center mb-10">
          {/* MediCore Logo - Replaced with CSS-generated SVG */}
          <svg
            className="w-10 h-10 mr-2" // Adjust size as needed
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White outer square */}
            <rect x="0" y="0" width="100" height="100" fill="white" rx="15" ry="15" /> {/* Rounded corners for the square */}
            {/* Blue cross */}
            <rect x="25" y="40" width="50" height="20" fill="#3B82F6" /> {/* Horizontal bar, Tailwind blue-500 equivalent */}
            <rect x="40" y="25" width="20" height="50" fill="#3B82F6" /> {/* Vertical bar, Tailwind blue-500 equivalent */}
          </svg>
          <span className="text-2xl font-bold text-white">MediCore</span> {/* Changed text to white */}
        </div>
        {/* Navigation Items */}
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                onClick={() => handleNavigationClick('dashboard')}
                className={getNavLinkClass('dashboard')}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                onClick={() => handleNavigationClick('appointments')}
                className={getNavLinkClass('appointments')}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Appointments
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                onClick={() => handleNavigationClick('prescriptions')}
                className={getNavLinkClass('prescriptions')}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Prescriptions
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                onClick={() => handleNavigationClick('billing')}
                className={getNavLinkClass('billing')}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 002 2v4a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Billing
              </a>
            </li>
            {/* NEW RECEPTIONIST LINK */}
            <li className="mb-4">
              <a
                href="#"
                onClick={() => handleNavigationClick('receptionistDashboard')}
                className={getNavLinkClass('receptionistDashboard')}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Receptionist
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Logout Button */}
      <div className="mt-auto">
        <a
          href="#"
          className="flex items-center p-3 text-gray-200 hover:bg-white hover:text-blue-700 rounded-xl"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
