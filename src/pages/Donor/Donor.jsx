import React from "react";
import "../../components/Donor/styles.css";
import DonationsList from "/src/components/Donor/DonationsList";

const Donor = () => {
  return (
    <div className="h-full bg-background-main flex flex-col items-center py-4 overflow-y-auto">
      <DonationsList />
    </div>
  );
};

export default Donor;
