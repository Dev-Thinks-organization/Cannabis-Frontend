import React, { useEffect } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
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
  setPage,
  page,
}) => {
  const categoryRef = useRef([]);
  const subCategory = useRef([]);
  const benefitsRef = useRef([]);
  const minpriceRef = useRef([]);
  const maxpriceRef = useRef([]);
  const [typedMinPrice, setTypedMinPrice] = React.useState("");
  const [typedMaxPrice, setTypedMaxPrice] = React.useState("");
  const clearFilter = () => {
    //unselet all the checkboxes
    subCategory.current.forEach((item) => {
      item.removeAttribute("checked");
      item.checked = false;
    });
    categoryRef.current.forEach((item) => {
      item.removeAttribute("checked");
      item.checked = false;
    });
    benefitsRef.current.forEach((el) => {
      el.removeAttribute("checked");
      el.checked = false;
    });

    minpriceRef.current.forEach((el) => {
      el.removeAttribute("checked");
      el.checked = false;
    });

    maxpriceRef.current.forEach((el) => {
      el.removeAttribute("checked");
      el.checked = false;
    });
    setMinPrice(null);
    setSelectedBenefit([]);
    setMaxPrice(null);
    setSelectedCategory([]);
    setTypedMaxPrice("");
    setTypedMinPrice("");
    setPage(1);
  };
  function boxPress(element) {
    if (element.getAttribute("checked") == null) {
      element.setAttribute("checked", "true");
      element.checked = true;
    } else {
      element.removeAttribute("checked");
      element.checked = false;
    }
  }
  return (
    <div className="">
      <div className="mt-10 flex h-5/6 flex-col items-center justify-between bg-white text-[#004B23] md:w-80 md:border-2 md:py-5 md:px-10">
        <h1 className="hidden md:block">FILTER BY</h1>
        <section>
          <div>
            {category &&
              category.map((data, id) => (
                <details
                  open
                  key={data.id}
                  onChange={(e) => {
                    // check if the checkbox is checked
                    if (e.target.checked) {
                      setSelectedCategory(e.target.value);
                      setPage(1);
                    } else {
                      setSelectedCategory((current) =>
                        current.filter((item) => item !== e.target.value)
                      );
                      setPage(1);
                    }
                  }}
                >
                  <summary value="" className="w-auto font-bold">
                    {data.name}
                  </summary>
                  {data.children.map((option, subid) => (
                    <div className="" key={subid}>
                      <input
                        type="radio"
                        value={option.name}
                        id={option.id}
                        // onClick={() => boxPress(subCategory.current[subid])}
                        key={option}
                        ref={(el) => (subCategory.current[option.id] = el)}
                        name="my-checkbox-category"
                        className=" outline:hover:focus:bg-[#004B23]  checked:bg-[#004B23] focus:outline-none"
                      />

                      <label htmlFor={option.name} className="p-2 text-sm">
                        {option.name}
                      </label>
                    </div>
                  ))}
                </details>
              ))}
          </div>

          <details
            open
            name="benefit"
            id="cars"
            className="  custom-select"
            onChange={(e) => {
              // check if the checkbox is checked
              if (e.target.checked) {
                setSelectedBenefit((current) => [...current, e.target.value]);
                setPage(1);
              } else {
                setSelectedBenefit((current) =>
                  current.filter((item) => item !== e.target.value)
                );
                setPage(1);
              }
            }}
            value={selectedBenefit}
          >
            <summary value="" className="w-full font-bold">
              Benefits
            </summary>
            {benefits &&
              benefits.map((data, id) => (
                <div key={id}>
                  <input
                    type={"checkbox"}
                    value={data.name}
                    ref={(el) => (benefitsRef.current[id] = el)}
                  />
                  <label htmlFor={data.name} className="p-2 text-sm">
                    {data.name}
                  </label>
                </div>
              ))}
          </details>
        </section>
        <div className=" w-10/12 pt-3">
          <h3 className="font-bold">Price</h3>
          <div className="flex ">
            <div>
              <input
                type="number"
                value={typedMinPrice}
                placeholder="Min Price"
                className="h-[15px] w-full rounded-md p-3"
                min={0}
                pattern="[0-9]*"
                onChange={(e) => {
                  setTypedMinPrice(e.target.value);
                  setMinPrice(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div>
              <input
                type="number"
                value={typedMaxPrice}
                placeholder="Max Price"
                className="h-[15px] w-full rounded-md p-3"
                min={0}
                pattern="[0-9]*"
                onChange={(e) => {
                  setTypedMaxPrice(e.target.value);
                  setMaxPrice(e.target.value);
                  setPage(1);
                }}
              />
            </div>
          </div>
        </div>

        <button
          className="mt-4 border-2 border-[#C4C4C4] bg-white py-2 px-4 text-center text-[#004B23] "
          onClick={() => clearFilter()}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
