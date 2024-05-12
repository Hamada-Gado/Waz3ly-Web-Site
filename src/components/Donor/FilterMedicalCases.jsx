import React, { useState } from "react";

const FilterMedicalCases = ({ setFurtherFiltering }) => {
  const [specialty, setSpecialty] = useState("");
  const [organization, setOrganization] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGorvernorate] = useState("");

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleGovernorateChange = (e) => {
    setGorvernorate(e.target.value);
  };

  const handleSubmit = () => {
    const specialtyValue = specialty;
    const organizationValue = organization;
    const areaValue = area;
    const governorateValue = governorate;

    setFurtherFiltering({
      specialtyValue,
      organizationValue,
      areaValue,
      governorateValue,
      type: "Medical Cases",
    });
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={(e) => {
        e.preventDefault();
        if (!specialty && !organization && !area && !governorate) {
          alert("Please Provide Filtering Options Fields");
        } else handleSubmit();
      }}
    >
      <div className="filter-label">
        <h2 className="filter-title text-xl">
          <strong>
            <u>Filtering Options:</u>
          </strong>
        </h2>
        <select
          className="filter-input bg-background-main "
          value={specialty}
          onChange={handleSpecialtyChange}
        >
          <option value="">Select Specialty</option>
          <option value="Surgeon">Surgeon</option>
          <option value="Dentists">Dentist</option>
        </select>
      </div>
      <div className="filter-label">
        <select
          className="filter-input bg-background-main "
          value={organization}
          onChange={handleOrganizationChange}
        >
          <option value="">Select Organization</option>
          <option value="Org1">Organization 1</option>
          <option value="Org2">Organization 2</option>
        </select>
      </div>
      <div className="filter-label">
        <select
          className="filter-input bg-background-main "
          value={area}
          onChange={handleAreaChange}
        >
          <option value="">Select Area</option>
          <option value="Area1">Area 1</option>
          <option value="Area2">Area 2</option>
        </select>
      </div>
      <div className="filter-label">
        <select
          className="filter-input bg-background-main "
          value={governorate}
          onChange={handleGovernorateChange}
        >
          <option value="">Select Governorate</option>
          <option value="Gov1">Governorate 1</option>
          <option value="Gov2">Governorate 2</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-black font-bold rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 text-black font-bold rounded"
        onClick={() => {
          setSpecialty("");
          setOrganization("");
          setArea("");
          setGorvernorate("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterMedicalCases;
