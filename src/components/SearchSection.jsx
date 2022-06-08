import React, { useEffect, useState } from "react";
import Axios from "axios";
import Search from "../Assets/Search.svg";
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
      `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${
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
      `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${
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
    <div className=" ">
      <div className="search-bg flex bg-[#CCFF33]  items-center justify-center flex-wrap h-96">
        <div className="w-1/2 flex flex-col item-center justify-center ">
          <h1 className=" text-white font-bold md:text-6xl  text-2xl text-center mb-10">
            Discover the best CBD Products
          </h1>
          <label></label>
          <div className="p-2  bg-white flex  rounded-full w-full ">
            <img src={Search} alt="logo " />
            <input
              onChange={onType}
              value={searchText}
              className="decoration-none selection:decoration-none w-full focus:outline-none"
              placeholder="What CBD products are you looking for?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
