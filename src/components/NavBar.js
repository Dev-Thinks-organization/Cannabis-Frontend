import React from "react";
import logo from "../Assets/llogo 1.svg";
import { slide as Menu } from "react-burger-menu";
import { Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinWide } from "@fortawesome/free-solid-svg-icons";
import burgerSvg from "../Assets/hamburger.svg";
import burgerSvgClose from "../Assets/hamBurgerClose.svg";
import linkdien from "../Assets/linkdien.svg";
import facebook from "../Assets/facebook.svg";
import twitter from "../Assets/twitter.svg";
import instagram from "../Assets/instagram.svg";
const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showHamBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" mx-auto flex max-w-7xl  justify-between  bg-white px-2 py-4 sm:px-14 md:flex-row lg:px-8">
        {/* left Section */}
        <div className="flex w-1/3 items-center justify-center md:w-full md:justify-start">
          <img className="h-10 w-10" src={logo}></img>
          <h1 className="ml-3 text-[#004B23] ">CBDgle</h1>
        </div>
        {/* desktop */}
        <div className="hidden w-full md:block">
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
        {/* mobile */}
        <div className="md:hidden">
          <ul className="flex w-full justify-between p-2 text-[#004B23]">
            <li className="flex items-center justify-center">
              <img
                width={"22.14px"}
                height={"15px"}
                objectFit={"contain"}
                className="mr-2"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
                alt="US Flag"
              />
            </li>
            <li>
              {isOpen ? (
                <img
                  src={burgerSvgClose}
                  alt="burger"
                  onClick={showHamBurgerMenu}
                  className="hover:cursor-pointer"
                />
              ) : (
                <img
                  src={burgerSvg}
                  alt="burger"
                  onClick={showHamBurgerMenu}
                  className="cursor-pointer"
                />
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`  relative h-screen bg-white ${isOpen ? "" : "hidden"} `}
      >
        <div className="container mx-auto h-full">
          <div className="">
            <div className="flex justify-center  border-b-2  border-[#C4C4C4] p-8">
              <img src={linkdien} alt="" srcSet="" className="mr-2" />
              <img src={facebook} alt="" srcSet="" className="mr-2" />
              <img src={twitter} alt="" srcSet="" className="mr-2" />
              <img src={instagram} alt="" srcSet="" className="mr-2" />
            </div>
          </div>
          <div className="h-1/2 ">
            <ul className="flex h-[44%] w-full flex-col-reverse items-stretch justify-between p-8 font-normal text-[#004B23] ">
              <li>
                <a
                  href="#how-it-works"
                  onClick={showHamBurgerMenu}
                  className=" mb-10 font-normal"
                >
                  How it works{" "}
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={showHamBurgerMenu}
                  className="  font-normal"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={showHamBurgerMenu}
                  className="font-normal"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
