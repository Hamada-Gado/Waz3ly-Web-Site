import React from "react";
import DonationsList from "/src/components/Donor/DonationsList";

const Donor = () => {
  return (
    <div className="h-full flex flex-col items-center py-4 overflow-y-auto">
      <DonationsList />
    </div>
  );
};

export default Donor;
