import React, { useState } from "react";

const FilterTeachingPosts = () => {
  const [subject, setSubject] = useState("");
  const [area, setArea] = useState("");
  const [government, setGovernorate] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleGovernorateChange = (event) => {
    setGovernorate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the values from the form inputs
    const subjectValue = subject;
    const governmentValue = government;
    const areaValue = area;

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <div>
      <h2>Filter Teaching Posts</h2>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      <div>
        <label htmlFor="area">Area:</label>
        <input type="text" id="area" value={area} onChange={handleAreaChange} />
      </div>
      <div>
        <label htmlFor="government">Governorate:</label>
        <input
          type="text"
          id="government"
          value={government}
          onChange={handleGovernorateChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterTeachingPosts;
