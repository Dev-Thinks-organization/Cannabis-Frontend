import React, { useEffect, useState } from "react";
import Axios from "axios";
import Search from "../Assets/Search.svg";
import { toast } from "react-toastify";
import { useScrollTo } from "react-use-window-scroll";
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
  const scrollTo = useScrollTo();
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
      const items = [...new Set(res.data.results)];
      // console.log(items, "-----items");
      setTotalPages(res.data.total_pages);
      setCount(res.data.count);
      setSearchResults(res.data.results);
    } catch (error) {
      toast.error(
        "Something Went Wrong While Searching try refreshing the page"
      );
    }
  };
  const onClicke = (e) => {
    // Window.scroll(0, 100);
    console.log("clicked");
    scrollTo({
      top: 300,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <div className=" ">
      <div
        className={`search-bg bg-image flex   h-96 flex-wrap items-center justify-center`}
      >
        <div className="item-center flex w-10/12 flex-col justify-center md:w-1/2 ">
          <h1 className=" mb-10 text-center text-4xl  font-normal  text-[#222831] md:text-6xl">
            Discover the best <br /> CBD Products
          </h1>
          <label></label>
          <div className="   ">
            <img src={Search} alt="logo " className="absolute ml-3 w-5 h-5 mt-2 md:w-[29px] md:h-[40px] md:mt-0 " />
            <input
              onClick={() => onClicke()}
              onChange={onType}
              value={searchText}
              className="decoration-none pr-3 pl-10 selection:decoration-none w-full rounded-full p-2 focus:outline-none search_input text-xs md:text-base text-[#C4C4C4] "
              placeholder="What CBD products are you looking for?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
