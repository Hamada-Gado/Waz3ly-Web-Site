import React from "react";
import { useState } from "react";
import "./styles.css";

const FilterMedicalSupplies = ({ setFurtherFiltering }) => {
  const [subCategory, setSubCategory] = useState("");

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the values from the form inputs
    const subCategoryValue = subCategory;

    setFurtherFiltering({
      subCategoryValue,
      type: "Medical Supplies",
    });

    // Save the values into appropriate variables or perform any other logic
  };

  return (
    <form
      className="mt-4 space-y-2 border-2 py-2 px-4 rounded-md shadow-md border-black max-w-56 text-base font-body"
      onSubmit={handleSubmit}
    >
      <div className="filter-label">
        <h2 className="filter-title text-xl">
          <strong>
            <u>Filtering Options:</u>
          </strong>
        </h2>
        <select
          className="filter-input bg-background-main "
          value={subCategory}
          onChange={handleSubCategoryChange}
        >
          <option value="">Select a Category</option>
          <option value="Medical Device">Medical Device</option>
          <option value="Medical Equipment">Medical Equipment</option>
          <option value="Medication">Medication</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary  text-black font-bold rounded"
      >
        Apply Filter
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 text-black font-bold rounded"
        onClick={() => {
          setSubCategory("");
          setFurtherFiltering(null);
        }}
      >
        Remove Filter
      </button>
    </form>
  );
};

export default FilterMedicalSupplies;
