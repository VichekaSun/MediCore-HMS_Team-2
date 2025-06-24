import React from 'react';
import BillingHistoryTable from './BillingHistoryTable.jsx'; // Import the BillingHistoryTable

const BillingPage = ({ billingHistory }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing History</h2>
      <BillingHistoryTable billingHistory={billingHistory} />
      {/* You can add more billing-specific content here, e.g., payment forms */}
    </div>
  );
};

export default BillingPage;
