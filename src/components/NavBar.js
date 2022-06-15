import React from "react";
import logo from "../Assets/llogo 1.svg";
const NavBar = () => {
  return (
    <nav className=" bg-white max-w-7xl mx-auto px-2 py-4 sm:px-14 lg:px-8 flex justify-between border-b-2">
      {/* left Section */}
      <div className="flex justify-start items-center w-full">
        <img className="w-10 h-10" src={logo}></img>
        <h1 className="text-[#004B23] ml-3 ">CBDgle</h1>
      </div>

      <div className="w-full">
        <ul className="flex p-4 justify-between w-full">
          <li>
            <a href="#how-it-works">How it works </a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>🇺🇸</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
