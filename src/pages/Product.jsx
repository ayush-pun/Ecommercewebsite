import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Searchbar from "../component/Searchbar";
import Filter from "../component/Filter";
import Sortdropdown from "../component/Sortdropdown";
import ProductData from "../dataset/ProductData";
import Card from "../component/Card";

const Product = () => {
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

  function handlesort(value){
    console.log(value);
    setSearchParams((prev)=>{
      const params = new URLSearchParams(prev);
      if (!value){
        params.delete("sort")
      }else{
        params.set("sort",value)
      }
      return params;
    })
  }

  // FINAL DATA PIPELINE (NO useEffect, NO state)
  const processedItems = useMemo(() => {
    let items = [...ProductData];

    // CATEGORY FILTER
    if (category !== "all") {
      items = items.filter((item) => item.category === category.toLowerCase());
    }

    // SEARCH FILTER
    if (search) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // SORT
    if (sort === "hightolow") {
      items.sort((a, b) => b.price - a.price);
    }

    if (sort === "lowtohigh") {
      items.sort((a, b) => a.price - b.price);
    }

    if (sort === "newestfirst") {
      items.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    if (sort === "highestrating") {
      items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [category, search, sort]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {/* CONTROLS */}
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
          <Sortdropdown setsortitem={handlesort}/>
        </div>

      </div>

      {/* PRODUCTS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {processedItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </main>
  );
};

export default Product;