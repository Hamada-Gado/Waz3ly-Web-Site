import React from "react";
import DonationsList from "/src/components/Donor/DonationsList";
import SidePanel from "/src/components/Donor/SidePanel";
const Donor = () => {
  return (
    <div
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
      <DonationsList />
    </div>
  );
};

export default Donor;
