import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollPrev()}
      className=" flex justify-center items-center"
    >
      <ChevronDoubleLeftIcon
        className="h-5 w-5 text-[#004B23]"
        disabled={isFirstItemVisible}
      >
        Left
      </ChevronDoubleLeftIcon>
    </button>

    //     <svg onClick={() => scrollPrev()} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    //   <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    // </svg>
  );
};

export default LeftArrow;
