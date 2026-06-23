import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  function goToPrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

      <button
        onClick={goToPrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg text-sm font-medium
                   hover:bg-black hover:text-white
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Previous
      </button>

   
      {Array.from(
        { length: totalPages },
        (_, i) => (
          <button
            key={i}
            onClick={() =>
              setCurrentPage(i + 1)
            }
            className={`px-3 py-2 border rounded-lg text-sm
              ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        )
      )}

    
      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg text-sm font-medium
                   hover:bg-black hover:text-white
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;