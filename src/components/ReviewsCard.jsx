import React from "react";
import StarRatings from "react-star-ratings";
import { truncate } from "../Helpers/Index";

const ReviewsCard = ({ title, description, rating, name, picture }) => {
  return (
    <div className="container mx-auto pt-24   pl-6 pr-6 hover:animate-pulse">
      {/* card */}
      <div className="w-32 h-32 rounded-full bg-white mt-4  relative left-24 top-20   ">
        <img src={picture} className="w-32 h-32 object-contain  rounded-full" />
      </div>

      <div className="w-80 h-min-[288px] h-[290px] bg-[#EEEEEE69]  rounded-[42px] ">
        <div className="pt-24">
          <h1 className="text-[#004B23] font-normal text-lg text-center">
            {title}
          </h1>
        </div>
        <div className="p-6">
          <h2 className="text-[#004B23] font-normal text-base text-left">
            {truncate(description, 15)}
          </h2>
        </div>
        <div className="flex justify-center pb-6 ">
          <StarRatings
            rating={Math.round(rating)}
            numberOfStars={5}
            name="rating"
            starDimension="10px"
            starSpacing="5px"
            starRatedColor="#FFDD00"
          />
          <h1 className="ml-4 font-normal text-[#004B23] text-base">
            {truncate(name ? name : "", 2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
