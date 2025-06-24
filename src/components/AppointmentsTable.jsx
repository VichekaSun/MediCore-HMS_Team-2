import React from 'react';

// AppointmentsTable component now accepts 'appointments' as a prop
const AppointmentsTable = ({ appointments }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointments</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Doctor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Map over the appointments array to render each row */}
          {appointments.map((appointment) => (
            <tr key={appointment.id}> {/* Key prop is important for lists */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {appointment.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {appointment.doctor}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {appointment.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
