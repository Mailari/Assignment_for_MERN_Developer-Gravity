import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex flex_end filter">
      <label htmlFor="filter">Filter: </label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;
