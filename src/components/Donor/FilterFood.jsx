import React from "react";
import { useState } from "react";

const FilterFood = ({ setFurtherFiltering }) => {
  const [type, setType] = useState("");

  // const handleTypeChange = (e) => {
  //   const value = e.target.value;
  //   if (e.target.checked) {
  //     setType((prevType) => [...prevType, value]); // Add the value to the array
  //   } else {
  //     setType((prevType) => prevType.filter((item) => item !== value)); // Remove the value from the array
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Save the values into appropriate variables or perform any other logic
  //   setFurtherFiltering({
  //     typeValue: type,
  //     type: "Food",
  //   });
  // };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the values from the form inputs
    const typeValue = type;
    setFurtherFiltering({
      typeValue,
      type: "Food",
    });
  };

  return (
    <form className="mt-4 space-y-2 max-w-56" onSubmit={handleSubmit}>
      <div className="filter-label">
        <h2 className="filter-title ">
          <strong>
            <u>Filtering Options:</u>
          </strong>
        </h2>
        <label>
          <strong>
            <u>Type:</u>
          </strong>
        </label>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="Fruits"
              checked={type.includes("Fruits")}
              onChange={handleTypeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            Fruits
          </label>
        </div>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="Vegetables"
              checked={type.includes("Vegetables")}
              onChange={handleTypeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            Vegetables
          </label>
        </div>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="Canned Food"
              checked={type.includes("Canned Food")}
              onChange={handleTypeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            Canned Food
          </label>
        </div>
        <div>
          <label>
            <input
              className="filter-input"
              type="checkbox"
              value="Fresh Meals"
              checked={type.includes("Fresh Meals")}
              onChange={handleTypeChange}
              onInput={(e) => console.log(e.target.value)}
            />
            Fresh Meals
          </label>
        </div>
        <label>
          <input
            className="filter-input"
            type="checkbox"
            value="Baked Goods"
            checked={type.includes("Baked Goods")}
            onChange={handleTypeChange}
            onInput={(e) => console.log(e.target.value)}
          />
          Baked Goods
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => {
          //uncheck all checkboxes
          document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
            el.checked = false;
          });
          setType("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterFood;
