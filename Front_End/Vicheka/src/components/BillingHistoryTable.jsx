import React from 'react';

// BillingHistoryTable component now accepts 'billingHistory' as a prop
const BillingHistoryTable = ({ billingHistory }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Billing History</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl"
            >
              Invoice
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Map over the billingHistory array to render each row */}
          {billingHistory.map((entry) => (
            <tr key={entry.id}> {/* Key prop is important for lists */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {entry.invoice}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {entry.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    entry.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {entry.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistoryTable;
