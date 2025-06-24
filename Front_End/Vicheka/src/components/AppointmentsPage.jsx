import React from 'react';
import AppointmentsTable from './AppointmentsTable.jsx'; // Import the AppointmentsTable

const AppointmentsPage = ({ appointments }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Appointments</h2>
      <AppointmentsTable appointments={appointments} />
      {/* You can add more appointments-specific content here */}
    </div>
  );
};

export default AppointmentsPage;
