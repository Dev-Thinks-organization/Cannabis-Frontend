import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      className=" flex justify-center items-center"
      onClick={() => scrollNext()}
    >
      <ChevronDoubleRightIcon className="h-5 w-5 text-[#004B23]">
        righ{" "}
      </ChevronDoubleRightIcon>
    </button>
  );
};

export default RightArrow;
