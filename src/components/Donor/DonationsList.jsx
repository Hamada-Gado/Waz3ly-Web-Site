import React, { useState } from "react";

const DonationsList = () => {
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
    <div className="space-y-4">
      {donations.map((donation) => (
        <div
          key={donation.id}
          className="border border-orange-500 bg-orange-100 p-6 rounded-md transform transition duration-500 ease-in-out hover:scale-105"
        >
          <h2 className="text-3xl text-black">{donation.title}</h2>
          <p className="text-xl text-black">{donation.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DonationsList;
