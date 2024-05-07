import React from "react";
import "./styles.css";

const Filter = ({ setFilter }) => {
  return (
    <div className="flex  flex-col justify-center items-center ">
      <select
        defaultValue={"default"}
        onChange={(e) => setFilter(e.target.value)}
        className="border-2 border-black bg-white text-center text-black py-2 px-4 rounded-md shadow-md"
      >
        <option value="default" disabled={true} hidden={true}>
          Choose a Category
        </option>
        <option value="">All</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        // Add more categories as needed
      </select>
    </div>
  );
};

export default Filter;
