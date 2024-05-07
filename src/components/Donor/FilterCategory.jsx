import React from 'react';

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
        className="border-2 border-black bg-white text-center text-black py-2 px-4 rounded-md shadow-md"
      >
        <option value="" disabled={true}>
          Choose a Category
        </option>
        <option value="">All</option>
        {distinctCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategory;
