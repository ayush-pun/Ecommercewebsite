import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Searchbar from "../component/Searchbar";
import Filter from "../component/Filter";
import Sortdropdown from "../component/Sortdropdown";
import ProductData from "../dataset/ProductData";
import Card from "../component/Card";
import Pagination from "../component/Pagination";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemperpage = 8;

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";

  // UPDATE CATEGORY IN URL
  function handlefilter(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value === "ALL") {
        params.delete("category");
      } else {
        params.set("category", value);
      }

      return params;
    });
  }

  // UPDATE SEARCH IN URL
  function handlesearch(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (!value) {
        params.delete("search");
      } else {
        params.set("search", value);
      }

      return params;
    });
  }

  // UPDATE SORT IN URL
  function handlesort(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (!value) {
        params.delete("sort");
      } else {
        params.set("sort", value);
      }

      return params;
    });
  }

  // FILTER + SEARCH + SORT
  let processedItems = [...ProductData];

  if (category !== "all") {
    processedItems = processedItems.filter(
      (item) => item.category === category.toLowerCase()
    );
  }

  if (search) {
    processedItems = processedItems.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "hightolow") {
    processedItems.sort((a, b) => b.price - a.price);
  }

  if (sort === "lowtohigh") {
    processedItems.sort((a, b) => a.price - b.price);
  }

  if (sort === "newestfirst") {
    processedItems.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (sort === "highestrating") {
    processedItems.sort((a, b) => b.rating - a.rating);
  }

  const totalPages = Math.max(
    1,
    Math.ceil(processedItems.length / itemperpage)
  );

  // Prevent invalid page numbers
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * itemperpage;

  const paginatedItems = processedItems.slice(
    startIndex,
    startIndex + itemperpage
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        <Searchbar
          search={search}
          setsearch={handlesearch}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <Filter
            handlefilter={handlefilter}
            active={category}
          />

          <Sortdropdown
            setsortitem={handlesort}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <Card key={item.id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center">
            No products found
          </p>
        )}
      </div>

      {processedItems.length > 0 && (
        <Pagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
};

export default Product;