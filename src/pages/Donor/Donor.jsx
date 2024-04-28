import React from "react";
import DonationsList from "/src/components/Donor/DonationsList";

const Donor = () => {
  return (
    <div
      className="space-y-4 overflow-y-auto"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: "2rem",
        border: "2px solid red",
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
