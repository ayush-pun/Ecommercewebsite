import React from "react";

const Filter = ({handlefilter}) => {
  return (
    <div className="flex flex-wrap gap-3">

      <button
      onClick={()=>{handlefilter("ALL")}}
        className="
          px-5 py-2.5
          rounded-full
          bg-zinc-900
          text-white
          font-medium
          transition-all duration-300
          hover:bg-zinc-700
        "
      >
        All
      </button>

      <button
        onClick={()=>{handlefilter("Men")}}
        
        className="
          px-5 py-2.5
          rounded-full
          border border-zinc-300
          bg-white
          text-zinc-700
          font-medium
          transition-all duration-300
          hover:border-zinc-900
          hover:text-zinc-900
        "
      >
        Men
      </button>

      <button
        onClick={()=>{handlefilter("Women")}}

        className="
          px-5 py-2.5
          rounded-full
          border border-zinc-300
          bg-white
          text-zinc-700
          font-medium
          transition-all duration-300
          hover:border-zinc-900
          hover:text-zinc-900
        "
      >
        Women
      </button>

      <button
        onClick={()=>{handlefilter("Accessories")}}
        className="
          px-5 py-2.5
          rounded-full
          border border-zinc-300
          bg-white
          text-zinc-700
          font-medium
          transition-all duration-300
          hover:border-zinc-900
          hover:text-zinc-900
        "
      >
        Accessories
      </button>

    </div>
  );
};

export default Filter;