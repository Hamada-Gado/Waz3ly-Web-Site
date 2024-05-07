import React from "react";
import { useState } from "react";
import "./styles.css";

const FilterBloodDonations = ({ setFurtherFiltering }) => {
  const [organization, setOrganization] = useState("");

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the values from the form inputs
    const organizationValue = organization;

    setFurtherFiltering({
      organizationValue,
      type: "Blood Donation",
    });

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={handleSubmit}
    >
      <div className="filter-label">
        <h2 className="text-xl">
          <strong>
            <u>Filter Options:</u>
          </strong>
        </h2>
        <select
          className="filter-input bg-background-main "
          value={organization}
          onChange={handleOrganizationChange}
        >
          <option value="">Select Organization</option>
          <option value="Hospital">Hospital</option>
          <option value="Governorate">Governorate</option>
          <option value="Area">Area</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary font-bold text-black rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 font-bold text-black rounded"
        onClick={() => {
          setOrganization("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterBloodDonations;
