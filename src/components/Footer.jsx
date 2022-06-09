import React from "react";
import logo from "../Assets/llogo 1.svg";
import linkdien from "../Assets/linkdien.svg";
import facebook from "../Assets/facebook.svg";
import twitter from "../Assets/twitter.svg";
import instagram from "../Assets/instagram.svg";
const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="flex justify-between flex-col container mx-auto py-12  ">
        <div className="p-24">
          <h1 className=" text-center text-[#004B23] font-normal text-xl">
            <a>http://www.cbdgle.com/ </a>
            is the best source site to compare CBD Products prices
          </h1>
          <p className="font-normal text-base text-center p-8 text-[#004B23]">
            All of our CBD products are 3rd party tested and have up to * 0.3%
            THC . *CBD pr oducts are legal on the federal level but are still
            illegal under some state laws. All CBD product's hea lth benefits on
            our website are b ased on the CBD brand's declaration and their
            customer's reviews. We are committed to making our website's content
            accessible and user - friendly to everyone. All CBD brands on our
            website have their own disclaimer and terms; please check them out
            before buying any products. For any questions, please contact our
            support te am by email: contact@cbdgle.com.
          </p>
        </div>

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
    </div>
  );
};

export default Footer;
