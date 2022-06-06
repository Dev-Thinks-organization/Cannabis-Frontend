import React from "react";
import StarRatings from "react-star-ratings";

const Card = (props) => {
  const truncate = (str, max = 10) => {
    const array = str.trim().split(" ");
    const ellipsis = array.length > max ? "..." : "";

    return array.slice(0, max).join(" ") + ellipsis;
  };
  return (
    <a href={props?.details?.link_to_item} target={"_blank"}>
      <div className="w-56 h-auto rounded-sm h-80  overflow-hidden shadow-lg">
        <img
          className="w-full object-contain h-1/2"
          // src="https://v1.tailwindcss.com/img/card-top.jpg"
          // TODO - add image when deploying
          src={props.details.img_source_link}
          alt="Sunset in the mountains"
        />
        <div className="px-3   center">
          <div className="flex flex-wrap justify-center ">
            <div className="font-normal text-base text-[#004B23] mb-1 text-left">
              {truncate(props?.details?.name, 4)}
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
          <p className="text-[#004B23] text-base text-center">
            {props?.details?.count_of_reviews} Reviews
          </p>
        </div>

        <div className="px-6 pt-1 pb-2 flex justify-center font-bold text-[#004B23] flex-wrap ">
          {props?.details.original_price_from &&
          props?.details.price_range_from ? (
              <>
                {
                  props?.details.original_price_from === props?.details.original_price_to ? (<> <s className="text-[#C4C4C4] font-normal ">
                $ {props?.details?.original_price_from} - $
                {props?.details?.original_price_to}
              </s>{" "}</>):(<></>)
                }
             
              $ {props?.details?.price_range_from} - $
              {props?.details?.price_range_to}
            </>
          ) : (
            <>
                <s className="text-[#C4C4C4] font-normal mr-1 ">
                  { props?.details.original_price !== props?.details.price ? (<>$ {props?.details?.original_price}</>):(<></>) }
              </s>{" "}
              ${props?.details?.price}
            </>
          )}
        </div>
        {/* <div>
          <h1> {props?.details?.name}</h1>
        </div> */}
      </div>
    </a>
  );
};

export default Card;
