import React from 'react';

// This component will display appointments from a receptionist's perspective.
// It receives all appointments data as a prop.
const ReceptionistAppointments = ({ appointments }) => { // Accepts appointments prop
  // Note: The dummy data here is for illustration.
  // In a real application, this component would display 'appointments' passed via props.
  const dummyAppointments = [
    { id: 'app001', patientName: 'Lisa Carter', date: '04/25/2024', time: '10:00 AM', doctor: 'Dr. Smith', status: 'Confirmed' },
    { id: 'app002', patientName: 'John Doe', date: '04/25/2024', time: '10:30 AM', doctor: 'Dr. Johnson', status: 'Confirmed' },
    { id: 'app003', patientName: 'Emily Davis', date: '04/26/2024', time: '09:00 AM', doctor: 'Dr. Williams', status: 'Pending' },
    { id: 'app004', patientName: 'Michael Brown', date: '04/26/2024', time: '11:00 AM', doctor: 'Dr. Smith', status: 'Confirmed' },
  ];

  // Use the 'appointments' prop if available, otherwise fallback to dummy data for display
  const displayAppointments = appointments && appointments.length > 0 ? appointments : dummyAppointments;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
      {/* Added overflow-x-auto to handle potential horizontal overflow on smaller screens */}
      <div className="overflow-x-auto"> 
        <table className="min-w-full divide-y divide-gray-200 table-auto"> {/* Added table-auto for better default sizing */}
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl">
                Patient
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900"> {/* Removed whitespace-nowrap */}
                  {appointment.patientName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600"> {/* Removed whitespace-nowrap */}
                  {appointment.date}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600"> {/* Removed whitespace-nowrap */}
                  {appointment.time}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600"> {/* Removed whitespace-nowrap */}
                  {appointment.doctor}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600"> {/* Removed whitespace-nowrap */}
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> {/* End of overflow-x-auto wrapper */}
    </div>
  );
};

export default ReceptionistAppointments;
