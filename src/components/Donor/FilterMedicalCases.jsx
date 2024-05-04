import React, { useState } from "react";

const FilterMedicalCases = () => {
  const [specialty, setSpecialty] = useState("");
  const [organization, setOrganization] = useState("");
  const [area, setArea] = useState("");
  const [government, setGorvernment] = useState("");

  const handleSubmit = () => {
    const specialtyValue = specialty;
    const organizationValue = organization;
    const areaValue = area;
    const governmentValue = government;
  };

  return (
    <div>
      <h2>Filter Medical Cases</h2>
      <div>
        <input
          type="text"
          placeholder="Medical Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Organization Name"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Governorate"
          value={government}
          onChange={(e) => setGorvernment(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterMedicalCases;
