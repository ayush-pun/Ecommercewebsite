import React from "react";

const Searchbar = ({search , setsearch}) => {
  return (
    <div className="flex w-full max-w-md overflow-hidden rounded-xl border border-zinc-300 bg-white">

      <input
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="
          flex-1
          px-4
          py-3
          text-zinc-800
          placeholder:text-zinc-400
          outline-none
        "
      />

      <button
        className="
          px-6
          bg-zinc-900
          text-white
          font-medium
          transition-all
          duration-300
          hover:bg-zinc-700
        "
      >
        Search
      </button>

    </div>
  );
};

export default Searchbar;