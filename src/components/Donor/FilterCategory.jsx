import React from "react";
import { donationsTest } from "/src/pages/Donor/data.js";

const FilterCategory = ({ setFilter, setFurtherFiltering }) => {
  const distinctCategories = [
    ...new Set(donationsTest.map((category) => category.category)),
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      <select
        onChange={(e) => {
          setFurtherFiltering(null);
          setFilter(e.target.value);
        }}
        className="border-2 border-black bg-white text-center text-black py-2 px-4 rounded-md shadow-md"
      >
        <option value="" selected={true} disabled={true}>
          Choose a Category
        </option>
        <option value="">All</option>
        {distinctCategories.map((category) => (
          <option key={category.category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategory;
