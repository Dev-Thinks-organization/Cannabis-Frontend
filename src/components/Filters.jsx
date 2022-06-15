import React, { useEffect } from "react";
import { toast } from "react-toastify";

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
    toast.success("All Filters Are Cleared");
  };
  return (
    <div className="  max-w-sm ">
      <div className="bg-white border-2 text-[#004B23] flex flex-col py-5 px-10 mt-10">
        <h1>FILTER BY</h1>
        <details
          name="cars"
          value={selectedCategory}
          id="cars"
          className=""
          onChange={(e) => {
            if (e.checked) {
              console.log(e.target.value);
              console.log(e);
              console.log(selectedCategory);
            } else {
            }
            console.log(e.target.checked);

            setSelectedCategory(e.target.value);
            toast.success(`Filtering By Category ${e.target.value}`, {
              position: "top-center",
              autoClose: 4942,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          <summary value="">Category</summary>
          {category &&
            category.map((data, id) => (
              // <optgroup label={data.name} key={id}>
              //   {data.children.map((option, subid) => (
              //     <option value={option.name} key={subid}>
              //       {option.name}
              //     </option>
              //   ))}
              // </optgroup>
              <div className="" key={id}>
                <input
                  type="checkbox"
                  name="my-checkbox-category"
                  value={data.name}
                  id={id}
                  key={id}
                  className="  shadow checked:shadow-xl  border-[#004B23] focus:ring-[#004B23] checked:bg-[#004B23] "
                />
                <label htmlFor={data.name} className="font-bold p-2">
                  {data.name}
                </label>
                <div>
                  {data.children.map((option, subid) => (
                    <div className="">
                      <input
                        type="checkbox"
                        value={option.name}
                        id={subid}
                        key={subid}
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
        <div className="flex justify-center flex-col">
          {" "}
          <details
            name="Min Price"
            className="  custom-select"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
              toast.success(`Filtering By Min Price ${e.target.value}$`, {
                position: "top-center",
                autoClose: 4942,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            <summary value="">Min</summary>
            <div className="">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div>
                  <input
                    type={"checkbox"}
                    name={`${i + 1}`}
                    value={`${i + 1}00`}
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
              toast.success(`Filtering By MaxPrice ${e.target.value}$`, {
                position: "top-center",
                autoClose: 4942,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            <summary>Max</summary>

            <div className="">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div>
                  <input
                    type={"checkbox"}
                    name={`${i + 1}`}
                    value={`${i + 1}00`}
                  />
                  <label htmlFor={`${i + 1}00`} className="p-2">
                    {" "}
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
            setSelectedBenefit(e.target.value);
            toast.success(`Filtering By Benefit ${e.target.value}`, {
              position: "top-center",
              autoClose: 4942,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
          value={selectedBenefit}
        >
          <summary value="">Benefits</summary>
          {benefits &&
            benefits.map((data, id) => (
              <div key={id}>
                <input type={"checkbox"} value={data.name} />
                <label htmlFor={data.name} className="p-2">
                  {" "}
                  {data.name}
                </label>
              </div>
            ))}
        </details>
        <button
          className="border-2 mt-4 border-[#C4C4C4] text-[#004B23] bg-white text-center py-2 px-4 "
          onClick={() => clearFilter()}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
