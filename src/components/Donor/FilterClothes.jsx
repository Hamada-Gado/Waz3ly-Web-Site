import React from "react";
import { useState } from "react";

const FilterClothes = ({ setFurtherFiltering }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [season, setSeason] = useState("");

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSeasonChange = (e) => {
    setSeason(e.target.value);
  };

  const handleSubmit = () => {
    // Read the values from the form inputs
    const ageValue = age;
    const genderValue = gender;
    const seasonValue = season;
    setFurtherFiltering({
      ageValue,
      genderValue,
      seasonValue,
      type: "Clothing",
    });

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={(e) => {
        e.preventDefault();
        if (!age && !gender && !season) {
          alert("Please Provide Filtering Options Fields");
        } else handleSubmit();
      }}
    >
      <div className="filter-label">
        <h2 className="filter-title text-xl ">
          <strong>
            <u>Filtering Options:</u>
          </strong>
        </h2>
        <label>
          <strong>
            <u>Age:</u>
          </strong>
        </label>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="0-10"
              checked={age === "0-10"}
              onChange={handleAgeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            0-10
          </label>
        </div>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="11-20"
              checked={age === "11-20"}
              onChange={handleAgeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            11-20
          </label>
        </div>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="21-30"
              checked={age === "21-30"}
              onChange={handleAgeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            21-30
          </label>
        </div>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="31-40"
              checked={age === "31-40"}
              onChange={handleAgeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            31-40
          </label>
        </div>
        <label>
          <input
            className="filter-input"
            type="checkbox"
            value=">40"
            checked={age === ">40"}
            onChange={handleAgeChange}
            onInput={(e) => console.log(e.target.value)}
          />
          {">"}40
        </label>
      </div>
      <div className="filter-label">
        <label>
          <strong>
            <u>Gender:</u>
          </strong>
          <select
            className="filter-input bg-background-main "
            value={gender}
            onChange={handleGenderChange}
            onInput={(e) => console.log(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
      </div>
      <div className="filter-label">
        <label>
          <strong>
            <u>Season:</u>
          </strong>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Summer"
                checked={season === "Summer"}
                onChange={handleSeasonChange}
                onInput={(e) => console.log(e.target.value)}
              />
              Summer
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Fall"
                checked={season === "Fall"}
                onChange={handleSeasonChange}
                onInput={(e) => console.log(e.target.value)}
              />
              Fall
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Winter"
                checked={season === "Winter"}
                onChange={handleSeasonChange}
                onInput={(e) => console.log(e.target.value)}
              />
              Winter
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Spring"
                checked={season === "Spring"}
                onChange={handleSeasonChange}
                onInput={(e) => console.log(e.target.value)}
              />
              Spring
            </label>
          </div>
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 font-bold bg-primary text-black rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 font-bold text-balck rounded"
        onClick={() => {
          //uncheck all checkboxes
          document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
            el.checked = false;
          });
          setAge("");
          setGender("");
          setSeason("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterClothes;
