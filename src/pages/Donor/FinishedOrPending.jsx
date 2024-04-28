import React, { useState } from "react";

const FinishedOrPending = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      title: "Donation 1",
      description: "This is donation request 1.",
      pending: false,
      completed: false,
    },
    {
      id: 2,
      title: "Donation 2",
      description: "This is donation request 2.",
      pending: false,
      completed: true,
    },
    {
      id: 3,
      title: "Donation 3",
      description: "This is donation request 3.",
      pending: true,
      completed: false,
    },
    {
      id: 4,
      title: "Donation 4",
      description: "This is donation request 4.",
      pending: true,
      completed: false,
    },
    {
      id: 5,
      title: "Donation 5",
      description: "This is donation request 5.",
      pending: false,
      completed: false,
    },
  ]);

  return (
    <div>
      <h1 className="text-4xl font-bold">Pending/Completed Donations</h1>
      <div className="space-y-4">
        {donations
          .filter((donation) => donation.pending || donation.completed)
          .map((donation) => (
            <div
              key={donation.id}
              className="border border-orange-500 bg-orange-100 p-6 rounded-md transform transition duration-500 ease-in-out hover:scale-100"
              style={{ width: "80%" }} // Add this line to set the width to 50%
            >
              <h2 className="text-3xl text-black">{donation.title}</h2>
              <p className="text-xl text-black">{donation.description}</p>
              {donation.pending && (
                <span className="absolute bottom-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md">
                  <strong className="text-black">ETA: 2 days</strong>
                  {<h2>Driver Information</h2>}
                </span>
              )}
              {donation.completed && (
                <span className="absolute bottom-2 right-2 bg-green-500 text-black font-bold px-2 py-1 rounded-md">
                  Completed
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FinishedOrPending;
