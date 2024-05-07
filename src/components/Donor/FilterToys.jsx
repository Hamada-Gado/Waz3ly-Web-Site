import React from "react";
import { useState } from "react";
import "./styles.css";

const FilterToys = ({ setFurtherFiltering }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the values from the form inputs

    const ageValue = age;
    const genderValue = gender;
    const categoryValue = category;
    setFurtherFiltering({
      ageValue,
      genderValue,
      categoryValue,
      type: "Toys",
    });
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={handleSubmit}
    >
      <div className="filter-label ">
        <h2 className="filter-title text-xl">
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
              // onInput={(e) => console.log(e.target.value)}
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
              // onInput={(e) => console.log(e.target.value)}
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
              // onInput={(e) => console.log(e.target.value)}
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
              // onInput={(e) => console.log(e.target.value)}
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
            // onInput={(e) => console.log(e.target.value)}
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
            // onInput={(e) => console.log(e.target.value)}
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
            <u>Category:</u>
          </strong>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Board Games"
                checked={category === "Board Games"}
                onChange={handleCategoryChange}
                // onInput={(e) => console.log(e.target.value)}
              />
              Board Games
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Stuffed Toys"
                checked={category === "Stuffed Toys"}
                onChange={handleCategoryChange}
                // onInput={(e) => console.log(e.target.value)}
              />
              Stuffed Toys
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Dolls"
                checked={category === "Dolls"}
                onChange={handleCategoryChange}
                // onInput={(e) => console.log(e.target.value)}
              />
              Dolls
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Sports"
                checked={category === "Sports"}
                onChange={handleCategoryChange}
                // onInput={(e) => console.log(e.target.value)}
              />
              Sports
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Cars"
                checked={category === "Cars"}
                onChange={handleCategoryChange}
                // onInput={(e) => console.log(e.target.value)}
              />
              Cars
            </label>
          </div>
          <div>
            <label>
              <input
                className="filter-input"
                type="checkbox"
                value="Outdoor"
                checked={category === "Outdoor"}
                onChange={handleCategoryChange}
                // onInput={(e) => console.log(e.target.value)}
              />
              Outdoor
            </label>
          </div>
        </label>
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
          //uncheck all checkboxes
          document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
            el.checked = false;
          });
          setAge("");
          setGender("");
          setCategory("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterToys;
