import React, { useEffect } from "react";

const Filters = ({
  setSelectedBenefit,
  selectedBenefit,
  selectedCategory,
  setSelectedCategory,
  benefits,
  setBenefits,
  setCategory,
  category,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
}) => {
  const clearFilter = () => {
    setMinPrice("");
    setSelectedBenefit("");
    setMaxPrice("");
    setSelectedCategory("");
  };
  return (
    <div className=" flex justify-center items-center  ">
      <div className="bg-white border-2 flex flex-col py-10 px-10 mt-10">
        <h1>FILTER BY</h1>
        <label htmlFor="cars">Choose a Category</label>
        <select
          name="cars"
          value={selectedCategory}
          id="cars"
          className="border-[1px] border-[#004B23] px-5 py-2 custom-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Category</option>
          {category &&
            category.map((data, id) => (
              <optgroup label={data.name} key={id}>
                {data.children.map((option, subId) => (
                  <option value={option.name} key={subId}>
                    {option.name}
                  </option>
                ))}
              </optgroup>
            ))}
        </select>
        <div className="flex justify-center flex-col">
          {" "}
          <label htmlFor="Min Price">Min Price</label>
          <select
            name="Min Price"
            className="border-[1px] border-[#004B23] px-5 py-2"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Min</option>
            <option value="0">$ 0</option>
            <option value="100">$ 100</option>
            <option value="200">$ 200</option>
            <option value="300">$ 300</option>
            <option value="400">$ 400</option>
            <option value="500">$ 500</option>
            <option value="600">$ 600</option>
            <option value="700">$ 700</option>
            <option value="800">$ 800</option>
            <option value="900">$ 900</option>
            <option value="1000">$ 1000</option>
            <option value="5000">$ 5,000</option>
            <option value="6000">$ 6,000</option>
            <option value="7000">$ 7,000</option>
            <option value="8000">$ 8,000</option>
            <option value="9000">$ 9,000</option>
            <option value="10000">$ 10,000</option>
            <option value="11000">$ 11,000</option>
            <option value="12000">$ 12,000</option>
            <option value="20000">$ 20,000</option>
            <option value="30000">$ 30,000</option>
            <option value="40000">$ 40,000</option>
            <option value="50000">$ 50,000</option>
            <option value="60000">$ 60,000</option>
            <option value="70000">$ 70,000</option>
            <option value="80000">$ 80,000</option>
            <option value="90000">$ 90,000</option>
          </select>
          <label htmlFor="Max Price">Max Price</label>
          <select
            name="Max Price "
            className="border-[1px] border-[#004B23] px-5 py-2"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Max</option>
            <option value="0">$ 0</option>
            <option value="100">$ 100</option>
            <option value="200">$ 200</option>
            <option value="300">$ 300</option>
            <option value="400">$ 400</option>
            <option value="500">$ 500</option>
            <option value="600">$ 600</option>
            <option value="700">$ 700</option>
            <option value="800">$ 800</option>
            <option value="900">$ 900</option>
            <option value="1000">$ 1000</option>
            <option value="5000">$ 5,000</option>
            <option value="6000">$ 6,000</option>
            <option value="7000">$ 7,000</option>
            <option value="8000">$ 8,000</option>
            <option value="9000">$ 9,000</option>
            <option value="10000">$ 10,000</option>
            <option value="11000">$ 11,000</option>
            <option value="12000">$ 12,000</option>
            <option value="20000">$ 20,000</option>
            <option value="30000">$ 30,000</option>
            <option value="40000">$ 40,000</option>
            <option value="50000">$ 50,000</option>
            <option value="60000">$ 60,000</option>
            <option value="70000">$ 70,000</option>
            <option value="80000">$ 80,000</option>
            <option value="90000">$ 90,000</option>
          </select>
        </div>

        <label htmlFor="cars">Benefits</label>
        <select
          name="cars"
          id="cars"
          className="border-[1px] border-[#004B23] px-5 py-2"
          onChange={(e) => setSelectedBenefit(e.target.value)}
          value={selectedBenefit}
        >
          <option value="">Benefits</option>
          {benefits &&
            benefits.map((data) => (
              <option value={data.name}>{data.name}</option>
            ))}
        </select>
        <button
          className="border-2 mt-4 border-[#004B23]"
          onClick={() => clearFilter()}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
