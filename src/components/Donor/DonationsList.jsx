import React, { useState } from "react";
import Filter from "./Filter";
import DonationForm from "./DonationForm";
import { donationsTest } from "/src/pages/Donor/data.js";
const DonationsList = () => {
  const [donations, setDonations] = useState(donationsTest);
  const [filter, setFilter] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null);

  const filteredDonations = donations.filter((donation) => {
    return (
      !donation.pending &&
      !donation.completed &&
      (filter ? donation.category === filter : true)
    );
  });
  const handleFormSubmit = (event) => {
    setDonations(
      donations.filter((donation) => donation.id !== selectedDonation.id)
    );
    setSelectedDonation(null);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-orange-500 text-center">
        Donations Requests
      </h1>
      <Filter setFilter={setFilter} />
      {filteredDonations.map((donation) => (
        <div
          key={donation.id}
          className={`w-full border border-orange-500 bg-orange-100 p-6 rounded-md ${
            selectedDonation === null
              ? "transform transition duration-500 ease-in-out hover:scale-110 hover:bg-orange-200"
              : ""
          }`}
        >
          <h2 className="text-xl text-black">{donation.title}</h2>
          <p className="text-base text-black">{donation.description}</p>
          <button
            onClick={() => {
              selectedDonation === donation
                ? setSelectedDonation(null)
                : setSelectedDonation(donation);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Donate {selectedDonation !== donation ? "🔽" : "🔼"}
          </button>
          {selectedDonation === donation && (
            <DonationForm
              selectedDonation={selectedDonation}
              onFormSubmit={handleFormSubmit}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DonationsList;
