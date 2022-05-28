import React, { useEffect, useState } from "react";
import Axios from "axios";

const SearchSection = ({
  setSearchResults,
  searchResults,
  minPrice,
  maxPrice,
  category,
  benefits,
  searchText,
  setCount,
  setSearchText,
  selectedCategory,
  setTotalPages,
  selectedBenefit,
  page,
}) => {
  const fetchData = async () => {
    const res = await Axios.get(
      `http://localhost:8000/api/items/?search=${searchText}&max_price=${
        maxPrice ? maxPrice : ""
      }&min_price=${minPrice ? minPrice : ""}&category__name=${
        selectedCategory ? selectedCategory : ""
      }&benefits__name=${selectedBenefit ? selectedBenefit : ""}&page=${
        page > 0 ? page : 1
      }`
    );
    setTotalPages(res.data.total_pages);
    setCount(res.data.count);
    setSearchResults(res.data.results);
  };
  useEffect(() => {
    fetchData();
  }, [minPrice, maxPrice, selectedCategory, selectedBenefit, page]);
  useEffect(() => {}, [page]);
  const onType = async (e) => {
    setSearchText(e.target.value);
    console.log(e);
    const res = await Axios.get(
      `http://localhost:8000/api/items/?search=${searchText}&max_price=${
        maxPrice ? maxPrice : ""
      }&min_price=${minPrice ? minPrice : ""}&category__name=${
        selectedCategory ? selectedCategory : ""
      }&benefits__name=${selectedBenefit ? selectedBenefit : ""}`
    );
    setTotalPages(res.data.total_pages);
    setCount(res.data.count);
    setSearchResults(res.data.results);
  };
  return (
    <div className="">
      <div className="search-bg flex  items-center justify-center flex-wrap">
        <div className="w-1/2 flex flex-col item-center justify-center ">
          <h1 className=" text-white font-bold md:text-6xl  text-2xl text-center mb-10">
            Discover the best CBD Products
          </h1>
          <label></label>
          <input
            className="p-2 rounded-sm"
            placeholder="What CBD products are you looking for?"
            onChange={onType}
            value={searchText}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
