import React from "react";
import { useState } from "react";

const FilterFood = ({ setFurtherFiltering }) => {
  const [type, setType] = useState("");

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
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={handleSubmit}
    >
      <div className="filter-label text-base font-body">
        <h2 className="filter-title text-xl ">
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
        className="px-4 py-2 font-bold bg-primary text-black rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 font-bold bg-red-500 text-black rounded"
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
