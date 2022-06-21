import React from "react";
import logo from "../Assets/llogo 1.svg";
const NavBar = () => {
  return (
    <nav className=" mx-auto flex max-w-7xl flex-col justify-between  bg-white px-2 py-4 sm:px-14 md:flex-row lg:px-8">
      {/* left Section */}
      <div className="flex w-full items-center justify-center md:justify-start">
        <img className="h-10 w-10" src={logo}></img>
        <h1 className="ml-3 text-[#004B23] ">CBDgle</h1>
      </div>

      <div className="w-full">
        <ul className="flex w-full justify-between p-4 text-[#004B23] ">
          <li>
            <a href="#how-it-works">How it works </a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="flex items-center justify-center">
            <p className="mr-2 hidden md:block">US</p>
            <img
              width={"22.14px"}
              height={"15px"}
              objectFit={"contain"}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
              alt="US Flag"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
