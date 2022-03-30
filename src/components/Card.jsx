import React from "react";
import StarRatings from "react-star-ratings";

const Card = (props) => {
  return (
    <a href="https://www.google.com" target={"_blank"}>
      <div className="max-w-sm rounded-sm  overflow-hidden shadow-lg">
        <img
          className="w-full object-cover h-44"
          // src="https://v1.tailwindcss.com/img/card-top.jpg"
          // TODO - add image when deploying
          src={props.details.img_source_link}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 ">
          <div className="flex flex-wrap justify-between">
            <div className="font-bold text-xl text-[#004B23] mb-2">
              {props?.details?.name}
              {console.log(props?.details?.reviews_score)}
            </div>{" "}
            <StarRatings
              rating={Math.round(props?.details?.reviews_score)}
              numberOfStars={6}
              name="rating"
              starDimension="10px"
              starSpacing="5px"
              starRatedColor="#CCFF33"
            />
          </div>
          <p className="text-[#004B23] text-base">
            {props?.details?.count_of_reviews} Reviews
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 flex justify-center font-bold text-[#004B23] ">
          <h1>$ {props?.details?.original_price}</h1>
        </div>
      </div>
    </a>
  );
};

export default Card;
