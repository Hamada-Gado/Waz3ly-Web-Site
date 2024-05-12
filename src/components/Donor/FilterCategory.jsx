import React from "react";

const FilterCategory = ({ donations, setFilter, setFurtherFiltering }) => {
  const distinctCategories = [
    ...new Set(donations.map((category) => category.category)),
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      <select
        defaultValue=""
        onChange={(e) => {
          setFurtherFiltering(null);
          setFilter(e.target.value);
        }}
        className="border-2 mb-6 border-black bg-white text-center text-black py-2 px-4 rounded-md shadow-md"
      >
        <option value="" className="text-base font-body" disabled={true}>
          CHOOSE A CATEGORY
        </option>
        <option className="text-base font-body" value="">
          All
        </option>
        {distinctCategories.map((category) => (
          <option
            key={category}
            className="font-body text-base"
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategory;
