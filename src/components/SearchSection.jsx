import React, { useEffect, useState } from "react";
import Axios from "axios";
import Search from "../Assets/Search.svg";
import { toast } from "react-toastify";
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
  sort,
}) => {
  const fetchData = async () => {
    try {
      const res = await Axios.get(
        `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${
          maxPrice ? maxPrice : ""
        }&min_price=${minPrice ? minPrice : ""}&category__name=${
          selectedCategory ? selectedCategory : ""
        }&benefits__name=${selectedBenefit ? selectedBenefit : ""}&page=${
          page > 0 ? page : 1
        }&ordering=${sort ? sort : ""}`
      );
      setTotalPages(res.data.total_pages);
      setCount(res.data.count);
      setSearchResults(res.data.results);
    } catch (error) {
      toast.error(
        "Something Went Wrong When Getting Data Try Refreshing The Page"
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, [minPrice, maxPrice, selectedCategory, selectedBenefit, page, sort]);
  useEffect(() => {}, [page]);
  const onType = async (e) => {
    try {
      setSearchText(e.target.value);
      console.log(e);
      const res = await Axios.get(
        `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${
          maxPrice ? maxPrice : ""
        }&min_price=${minPrice ? minPrice : ""}&category__name=${
          selectedCategory ? selectedCategory : ""
        }&benefits__name=${selectedBenefit ? selectedBenefit : ""}&page=${
          page > 0 ? page : 1
        }&ordering=${sort ? sort : ""}`
      );
      setTotalPages(res.data.total_pages);
      setCount(res.data.count);
      setSearchResults(res.data.results);
    } catch (error) {
      toast.error(
        "Something Went Wrong While Searching try refreshing the page"
      );
    }
  };
  return (
    <div className=" ">
      <div className="search-bg flex bg-[#CCFF33]  items-center justify-center flex-wrap h-96">
        <div className="w-1/2 flex flex-col item-center justify-center ">
          <h1 className=" text-[#004B23] font-bold md:text-6xl  text-2xl text-center mb-10">
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
