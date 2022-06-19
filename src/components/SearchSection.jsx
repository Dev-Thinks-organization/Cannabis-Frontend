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
      let category = selectedCategory.toString();
      let benefit = selectedBenefit.toString();
      console.log(category, benefit);
      const res = await Axios.get(
        `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${
          maxPrice ? maxPrice : ""
        }&min_price=${minPrice ? minPrice : ""}&category=${
          selectedCategory ? category : ""
        }&benefits=${selectedBenefit ? benefit : ""}&page=${
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
  useEffect(() => {
    console.log(selectedCategory.toString());
  }, [selectedCategory, page]);
  const onType = async (e) => {
    try {
      setSearchText(e.target.value);
      console.log(e);
      let category = selectedCategory.toString();
      let benefit = selectedBenefit.toString();
      const res = await Axios.get(
        `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${
          maxPrice ? maxPrice : ""
        }&min_price=${minPrice ? minPrice : ""}&category=${
          selectedCategory ? category : ""
        }&benefits=${selectedBenefit ? benefit : ""}&page=${
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
      <div
        className={`search-bg bg-image flex   h-96 flex-wrap items-center justify-center`}
      >
        <div className="item-center flex w-1/2 flex-col justify-center ">
          <h1 className=" mb-10 text-center text-2xl  font-normal text-[#004B23] md:text-6xl">
            Discover the best <br /> CBD Products
          </h1>
          <label></label>
          <div className="flex  w-full rounded-full  bg-white p-2 ">
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
