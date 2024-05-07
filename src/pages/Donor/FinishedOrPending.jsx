import React, { useState } from 'react';
import { donationsTest } from './data.js';

const FinishedOrPending = () => {
  const [donations, setDonations] = useState(donationsTest);
  const [showDriverInfo, setShowDriverInfo] = useState(false);
  const [currDonation, setCurrDonation] = useState(null);

  return (
    <div className="py-8 flex flex-col w-full h-full overflow-auto justify-center items-center">
      <h1 className="text-3xl font-bold">Pending/Completed Donations</h1>
      <div className="space-y-4">
        {donations
          .filter((donation) => donation.pending || donation.completed)
          .map((donation) => (
            <div
              key={donation.id}
              className="border w-full  border-accent bg-background-dark p-6 rounded-md transform transition duration-500 ease-in-out hover:scale-100 "
              style={{ minWidth: '500px' }} // Increase the width here
            >
              <h2 className="text-3xl text-black">{donation.title}</h2>
              <p className="text-xl text-black">{donation.description}</p>
              {donation.pending && (
                <div className="flex justify-between">
                  <span className=" bottom-2 right-2 bg-accent text-white px-2 py-1 rounded-md">
                    <strong className="text-black">ETA: 2 days</strong>
                  </span>
                  <button
                    className="bg-secondary text-white px-2 py-1 rounded-md"
                    onClick={() => {
                      setShowDriverInfo(true);
                      setCurrDonation(donation);
                    }}
                  >
                    DRIVER INFORMATION
                  </button>
                </div>
              )}
              {donation.completed && (
                <span className="bottom-2 right-2 bg-accent text-black font-bold px-2 py-1 rounded-md">
                  Completed
                </span>
              )}
              {currDonation === donation && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded-md absolute">
                    <h3 className="text-xl font-bold">Driver Information</h3>
                    <p className="md:font-bold">Driver Name: John Doe</p>
                    <p className="md:font-bold">Phone Number: 123-456-7890</p>
                    <p className="md:font-bold">License Plate: ABC123</p>
                    <button
                      className="absolute top-2 right-2 outline-none "
                      onClick={() => {
                        setShowDriverInfo(false);
                        setCurrDonation(null);
                      }}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FinishedOrPending;
