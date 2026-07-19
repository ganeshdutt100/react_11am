import React from "react";

const CategoryFilter = ({ filterCategory, setFilterCategory }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-bold text-gray-800">History</h3>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 font-medium">
          Filter Category:
        </span>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Categories</option>
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
