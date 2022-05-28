import React from "react";
import logo from "../Assets/llogo 1.svg";
import linkdien from "../Assets/linkdien.svg";
import facebook from "../Assets/facebook.svg";
import twitter from "../Assets/twitter.svg";
import instagram from "../Assets/instagram.svg";
const Footer = () => {
  return (
    <>
      <div className="flex justify-between flex-col container mx-auto py-12 ">
        <div className="flex justify-start items-center ">
          <img className="w-10 h-10" src={logo}></img>
          <h1 className="text-[#004B23] ml-3 ">CBDgle</h1>
        </div>
        <div className="flex justify-end">
          <img src={linkdien} alt="" srcset="" />
          <img src={facebook} alt="" srcset="" />
          <img src={twitter} alt="" srcset="" />
          <img src={instagram} alt="" srcset="" />
        </div>
        <div className="border-b-2 mt-2 mb-2"></div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-normal text-[#004B23] font-lg">
            Contact@cbdgle.com is the best source site to compare CBD Products
            prices
          </h1>
          <h1 className="text-normal text-[#C4C4C4] font-lg">
            2022 CBDgle all rights reserved
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
