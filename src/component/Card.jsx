import React from "react";

const Card = ({ item }) => {
  return (
    <div
      className="
        group
        bg-white
        border border-zinc-200
        rounded-3xl
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="overflow-hidden bg-zinc-100 h-80">
        <img
          src={item.image}
          alt={item.name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {item.category}
        </p>

        {/* Product Name */}
        <h3 className="mt-2 text-lg font-semibold text-zinc-900">
          {item.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-amber-500">★</span>
          <span className="text-sm text-zinc-600">
            {item.rating}
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">

          <span className="text-xl font-bold text-zinc-900">
            ${item.price}
          </span>

          <button
            className="
              px-4
              py-2
              text-sm
              font-medium
              rounded-full
              bg-zinc-900
              text-white
              transition-all
              duration-300
              hover:bg-zinc-700
            "
          >
            View
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;
