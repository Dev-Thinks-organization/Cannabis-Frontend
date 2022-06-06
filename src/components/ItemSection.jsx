import React from "react";
import Card from "./Card";
import Loader from "react-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const ItemSection = ({ data, count, page, setPage, totalPage, searchText }) => {
  const NextPage = () => {
    if (page >= totalPage) {
      alert(" You are at the end of the page ");
    } else {
      setPage(page + 1);
    }
  };
  const PreviousPage = () => {
    if (page <= 1) {
      alert(" You are on the first page cant go back ");
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex justify-center items-center p-3">
      <div className="bg-white container mx-auto">
        <div className="w-full  flex justify-between">
          <h1 className="text-[#004B23] font-normal ">{count} Results</h1>
          <button className="text-[#004B23] ">Sort</button>
        </div>
        <div className="flex  justify-evenly flex-wrap w-full gap-6">
          {data.length > 0 ? (
            data.map((details, id) => <Card details={details} key={id} />)
          ) : (
            <>
              {searchText !== "" ? (
                <h1 className="text-2xl text-[#004B23] font-bold">
                  No results Found{" "}
                </h1>
              ) : (
                // <Loader
                //   loaded={false}
                //   lines={13}
                //   length={20}
                //   width={10}
                //   radius={30}
                //   corners={1}
                //   rotate={0}
                //   direction={1}
                //   color="#000"
                //   speed={1}
                //   trail={60}
                //   shadow={false}
                //   hwaccel={false}
                //   className="spinner"
                //   zIndex={2e9}
                //   top="50%"
                //   left="50%"
                //   scale={1.0}
                //   loadedClassName="loadedContent"
                // />
                <h1 className="text-2xl text-[#004B23] font-bold">
                  No results Found{" "}
                </h1>
              )}
            </>
          )}
          {}
        </div>
        {data.length > 0 && (
          <div className="mt-20 flex justify-center items-center px-5 text-[#004B23]">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faArrowLeft}
              onClick={() => PreviousPage()}
            />
            <h1 className="p-6">
              {" "}
              {page}/{totalPage}
            </h1>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faArrowRight}
              onClick={() => NextPage()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSection;
