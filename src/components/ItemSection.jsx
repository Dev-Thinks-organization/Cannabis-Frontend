import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Drawer from "./Drawer";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import slider from "../Assets/Slider.svg";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import Filters from "./Filters";
import { toast } from "react-toastify";
const ItemSection = ({
  data,
  count,
  page,
  setPage,
  totalPage,
  searchText,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  minPrice,
  setMaxPrice,
  setMinPrice,
  category,
  benefits,
  setCategory,
  selectedBenefit,
  setBenefits,
  setSelectedBenefit,
  setSort,
  sort,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState("Popular");
  const NextPage = () => {
    if (page >= totalPage) {
      toast.alert(" You are at the end of the page ");
    } else {
      setPage(page + 1);
      toast.success(`Current Page ${page + 1}`);
    }
  };
  const PreviousPage = () => {
    if (page <= 1) {
      toast.alert(" You are on the First page cant go back ");
    } else {
      setPage(page - 1);
      toast.success(`Current Page ${page - 1}`);
    }
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex w-full items-center justify-center p-3">
      <div className="container mx-auto bg-white ">
        <div className="  mb-6 flex justify-between bg-[#CCFF33] p-3 font-normal capitalize text-[#004B23] md:bg-transparent">
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Filters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              maxPrice={maxPrice}
              minPrice={minPrice}
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
              category={category}
              benefits={benefits}
              setCategory={setCategory}
              selectedBenefit={selectedBenefit}
              setBenefits={setBenefits}
              setSelectedBenefit={setSelectedBenefit}
            />
          </Drawer>
          <button
            onClick={() => setIsOpen(true)}
            className="font-normal capitalize text-[#004B23] md:hidden"
          >
            Filter By
          </button>
          <h1 className="font-normal text-[#004B23] ">{count} Results</h1>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center  ">
                Sort By {selectedSort}
                <img
                  src={slider}
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                  alt="icon of sorting"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item selected>
                    {({ active }) => (
                      <p
                        onClick={() => {
                          setSelectedSort("Popular");
                          setSort("-popular_ind");
                          toast.success("Sorting By Popular Items");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-[#004B23]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Popular
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        onClick={() => {
                          setSelectedSort("Highest Rating");
                          setSort("-reviews_score");
                          toast.success("Sorting By Top Rating");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 font-normal text-[#004B23]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Rating
                      </p>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        onClick={() => {
                          setSelectedSort("Low To High");
                          setSort("price,price_range_from");
                          toast.success("Sorting By Low To High");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 font-normal text-[#004B23]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Low to High
                      </p>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setSelectedSort("High To Low");
                          setSort("-price,-price_range_from");
                          toast.success("Sorting By High To Low");
                        }}
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 font-normal  text-[#004B23]"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        High to Low
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex   w-full flex-wrap justify-center gap-[15px]">
          {data.length > 0 ? (
            data.map((details, id) => <Card details={details} key={id} />)
          ) : (
            <>
              {data.count === 0 ? (
                <ClipLoader
                  color={"#004B23"}
                  loading={true}
                  // css={override}
                  size={150}
                />
              ) : (
                <h1 className="text-2xl font-bold text-[#004B23]">
                  No Items To Show
                </h1>
              )}
            </>
          )}
          {}
        </div>
        {data.length > 0 && (
          <div className="mt-20 flex items-center justify-center px-5 text-[#004B23]">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faBackwardStep}
              onClick={() => PreviousPage()}
            />
            <h1 className="p-6">
              {" "}
              {page}/{totalPage}
            </h1>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faForwardStep}
              onClick={() => NextPage()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSection;
