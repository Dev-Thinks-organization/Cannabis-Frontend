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
      <div className="mt-10 flex h-5/6 w-80 flex-col justify-between bg-white text-[#004B23] md:border-2 md:py-5 md:px-10">
        <h1 className="hidden md:block">FILTER BY</h1>
        <section>
          <details
            name="cars"
            value={selectedCategory}
            id="cars"
            className=""
            onChange={(e) => {
              // check if the checkbox is checked
              if (e.target.checked) {
                setSelectedCategory((current) => [...current, e.target.value]);
                setPage(1);
              } else {
                setSelectedCategory((current) =>
                  current.filter((item) => item !== e.target.value)
                );
                setPage(1);
              }
            }}
          >
            <summary value="" className="w-auto">
              Category
            </summary>
            {category &&
              category.map((data, id) => (
                <div className="" key={id}>
                  <input
                    type="checkbox"
                    name="my-checkbox-category"
                    value={data.name}
                    ref={(el) => (categoryRef.current[id] = el)}
                    id={id}
                    key={id}
                    className="   border-[#004B23] shadow  checked:bg-[#004B23] checked:shadow-xl focus:ring-[#004B23] "
                  />
                  <label htmlFor={data.name} className="p-2 font-bold">
                    {data.name}
                  </label>
                  <div>
                    {data.children.map((option, subid) => (
                      <div className="" key={subid}>
                        <input
                          type="checkbox"
                          value={option.name}
                          id={option.id}
                          // onClick={() => boxPress(subCategory.current[subid])}
                          key={option}
                          ref={(el) => (subCategory.current[option.id] = el)}
                          name="my-checkbox-category"
                          className=""
                        />

                        <label htmlFor={option.name} className="p-2">
                          {option.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </details>
          <div className="flex flex-col justify-center">
            <details
              name="Min Price"
              className="  custom-select"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                setPage(1);
              }}
            >
              <summary value="" className="w-auto ">
                Min
              </summary>
              <div className="">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i}>
                    <input
                      type={"radio"}
                      ref={(el) => (minpriceRef.current[i] = el)}
                      name={`minValue`}
                      value={`${i + 1}00`}
                      className="  border-[#004B23] shadow  checked:bg-[#004B23] checked:shadow-xl focus:ring-[#004B23] "
                    />
                    <label htmlFor={`${i + 1}00`} className="p-2">
                      {" "}
                      {`$${i + 1}00`}
                    </label>
                  </div>
                ))}
              </div>
            </details>
            <details
              name="Max Price "
              className="  custom-select"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setPage(1);
              }}
            >
              <summary className="w-auto ">Max</summary>

              <div className="">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i}>
                    <input
                      type={"radio"}
                      name={`maxValue`}
                      ref={(el) => (maxpriceRef.current[i] = el)}
                      value={`${i + 1}00`}
                      className="  selected:hover:checked:focus:ring-[#004B23] border-[#004B23]  shadow checked:bg-[#004B23] checked:shadow-xl hover:ring-[#004B23] "
                    />
                    <label htmlFor={`${i + 1}00`} className="p-2">
                      {`$${i + 1}00`}
                    </label>
                  </div>
                ))}
              </div>
            </details>
          </div>

          <details
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
            <summary value="" className="w-full">
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
                  <label htmlFor={data.name} className="p-2">
                    {data.name}
                  </label>
                </div>
              ))}
          </details>
        </section>

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
