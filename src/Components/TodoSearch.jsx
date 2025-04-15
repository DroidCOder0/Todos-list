import React from "react";

export default function TodoSearch({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
