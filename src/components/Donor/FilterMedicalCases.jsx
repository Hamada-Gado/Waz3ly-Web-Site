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
        <input
          className="filter-input border border-black rounded-lg bg-background-main "
          placeholder="  Specialty"
          value={specialty}
          onChange={handleSpecialtyChange}
        ></input>
      </div>
      <div className="filter-label">
        <input
          className="filter-input border border-black rounded-lg bg-background-main "
          placeholder="  Organization"
          value={organization}
          onChange={handleOrganizationChange}
        ></input>
      </div>
      <div className="filter-label">
        <input
          className="filter-input border border-black rounded-lg bg-background-main "
          placeholder="  Area"
          value={area}
          onChange={handleAreaChange}
        ></input>
      </div>
      <div className="filter-label">
        <input
          className="filter-input border border-black rounded-lg bg-background-main "
          placeholder="  Governorate"
          value={governorate}
          onChange={handleGovernorateChange}
        ></input>
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
