import React from "react";

const SortDropdown = ({setsortitem}) => {
  return (
    <div>
      <select
        onChange={(e)=>setsortitem(e.target.value)}
        className="
          px-5 py-3
          rounded-xl
          border border-zinc-300
          bg-white
          text-zinc-700
          font-medium
          cursor-pointer
          outline-none
          transition-all duration-300
          hover:border-zinc-900
          focus:border-zinc-900
          focus:ring-2
          focus:ring-zinc-200
        "
      >
        <option value="newestfirst">Newest First</option>
        <option value="hightolow">High To Low</option>
        <option value="lowtohigh">Low To High</option>
        <option value="highestrating">Highest Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;