//create a dashboard for the donor to choose to view all cases or view their donations or manage their profile

import React from "react";
import { Link } from "react-router-dom";

// change the link to buttons

<div className="space-y-4"></div>;

const sidePanel = () => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="w-1/4 bg-gray-200"
        style={{ height: "100vh", width: "15%" }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/donor" className="text-blue-500 hover:underline">
                Donation Cases
              </Link>
            </li>
            <li>
              <Link
                to="/FinishedOrPendingDonations"
                className="text-blue-500 hover:underline"
              >
                My Donations
              </Link>
            </li>
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Manage Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Content of the dashboard */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default sidePanel;
