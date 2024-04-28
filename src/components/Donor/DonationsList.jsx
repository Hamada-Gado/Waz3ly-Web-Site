import React, { useState } from "react";
import Filter from "./Filter";
import DonationForm from "./DonationForm";

const DonationsList = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      title: "Donation 1",
      description: "This is donation request 1.",
      category: "Category 1",
    },
    {
      id: 2,
      title: "Donation 2",
      description: "This is donation request 2.",
      category: "Category 2",
    },
    // Add more donation requests as needed
  ]);
  const [filter, setFilter] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null);

  const filteredDonations = filter
    ? donations.filter((donation) => donation.category === filter)
    : donations;

  return (
    <div className="space-y-4">
      <Filter setFilter={setFilter} />
      {filteredDonations.map((donation) => (
        <div
          key={donation.id}
          className="border border-orange-500 bg-orange-100 p-6 rounded-md transform transition duration-500 ease-in-out hover:scale-100"
        >
          <h2 className="text-3xl text-black">{donation.title}</h2>
          <p className="text-xl text-black">{donation.description}</p>
          <button onClick={() => setSelectedDonation(donation)}>
            Donate🔽
          </button>
          {selectedDonation === donation && (
            <DonationForm
              selectedDonation={selectedDonation}
              setSelectedDonation={setSelectedDonation}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DonationsList;
