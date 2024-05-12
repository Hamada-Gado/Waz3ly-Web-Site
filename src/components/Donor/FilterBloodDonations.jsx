import React from "react";
import { useState } from "react";

const FilterBloodDonations = ({ setFurtherFiltering }) => {
  const [organization, setOrganization] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [area, setArea] = useState("");

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleGovernorateChange = (e) => {
    setGovernorate(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleSubmit = () => {
    // Read the values from the form inputs
    const organizationValue = organization;
    const governorateValue = governorate;
    const areaValue = area;

    setFurtherFiltering({
      organizationValue,
      governorateValue,
      areaValue,
      type: "Blood Donation",
    });

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={(e) => {
        e.preventDefault();
        if (!organization && !area && !governorate) {
          alert("Please Provide Filtering Options Fields");
        } else handleSubmit();
      }}
    >
      <div className="filter-label">
        <h2 className="text-xl">
          <strong>
            <u>Filter Options:</u>
          </strong>
        </h2>
        <input
          className="filter-input border mb-2 border-black rounded-lg bg-background-main "
          placeholder="  Organization"
          value={organization}
          onChange={handleOrganizationChange}
        ></input>
        <input
          className="filter-input border mb-2 border-black rounded-lg bg-background-main "
          placeholder="  Governorate"
          value={governorate}
          onChange={handleGovernorateChange}
        ></input>
        <input
          className="filter-input border  border-black rounded-lg bg-background-main "
          placeholder="  Area"
          value={area}
          onChange={handleAreaChange}
        ></input>
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
          setGovernorate("");
          setArea("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterBloodDonations;
