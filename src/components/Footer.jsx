import React from "react";
import logo from "../Assets/llogo 1.svg";
import linkdien from "../Assets/linkdien.svg";
import facebook from "../Assets/facebook.svg";
import twitter from "../Assets/twitter.svg";
import instagram from "../Assets/instagram.svg";
const Footer = () => {
  return (
    <div className="border-t-2" id="about">
      <div className="container mx-auto flex flex-col justify-between py-12  ">
        <div className="p-24">
          <h1 className=" text-center text-xl font-normal text-[#004B23]">
            <a>http://www.cbdgle.com/ </a>
            is the best source site to compare CBD Products prices
          </h1>
          <p className="p-8 text-center text-base font-normal text-[#004B23]">
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

        <div className="flex items-center justify-start ">
          <img className="h-10 w-10" src={logo}></img>
          <h1 className="ml-3 text-[#004B23] ">CBDgle</h1>
        </div>
        <div className="flex justify-end">
          <img src={linkdien} alt="" srcSet="" />
          <img src={facebook} alt="" srcSet="" />
          <img src={twitter} alt="" srcSet="" />
          <img src={instagram} alt="" srcSet="" />
        </div>
        <div className="mt-2 mb-2 border-b-2"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-normal font-lg text-[#004B23]">
            Contact@cbdgle.com is the best source site to compare CBD Products
            prices
          </h1>
          <h1 className="text-normal font-lg text-[#C4C4C4]">
            2022 CBDgle all rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
