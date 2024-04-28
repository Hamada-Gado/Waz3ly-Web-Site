import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="border-2 border-black bg-white text-black py-2 px-4 rounded-md shadow-md"
    >
      <option value="" disabled>
        Choose a Category
      </option>
      <option value="">All</option>
      <option value="Category 1">Category 1</option>
      <option value="Category 2">Category 2</option>
      // Add more categories as needed
    </select>
  );
};

export default Filter;
