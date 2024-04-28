import React from "react";
import DonationsList from "/src/components/Donor/DonationsList";

const Donor = () => {
  return (
    <div
      className="space-y-4 overflow-y-auto"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        fontSize: "2rem",
      }}
    >
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        Donations Requests
      </h1>
      <DonationsList className="overflow-y-auto" />
    </div>
  );
};

export default Donor;
