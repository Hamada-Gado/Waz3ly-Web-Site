import React, { useState } from "react";

const FilterTeachingPosts = ({ setFurtherFiltering }) => {
  const [subject, setSubject] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleGovernorateChange = (event) => {
    setGovernorate(event.target.value);
  };

  const handleSubmit = () => {
    // Read the values from the form inputs
    const subjectValue = subject;
    const governorateValue = governorate;
    const areaValue = area;

    setFurtherFiltering({
      subjectValue,
      governorateValue,
      areaValue,
      type: "Teaching Posts",
    });

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={(e) => {
        e.preventDefault();
        if (!subject && !area && !governorate) {
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
          placeholder="  Subject"
          value={subject}
          onChange={handleSubjectChange}
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
          //check if there was a filter applied
          setSubject("");
          setArea("");
          setGovernorate("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterTeachingPosts;
