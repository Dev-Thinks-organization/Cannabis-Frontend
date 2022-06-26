import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { truncate } from "../Helpers/Index";
import TextTruncate from "react-text-truncate"; // recommend
import { Modal } from "flowbite-react";

const Card = (props) => {
  const [open, setOpen] = useState(false);

  const [openDescription, setOpenDescription] = useState(false);
  let showRedColor = false;
  const onClose = () => {
    setOpen(false);
  };
  if (props?.details.original_price !== props?.details.price) {
    showRedColor = true;
  }
  return (
    <div className=" h-96 w-40  cursor-pointer  overflow-hidden  rounded-sm  md:w-56">
      <a href={props?.details?.link_to_item} target={"_blank"}>
        <img
          className="h-1/2 w-full object-contain"
          // src="https://v1.tailwindcss.com/img/card-top.jpg"
          // TODO - add image when deploying
          src={props.details.img_source_link}
          alt="Sunset in the mountains"
          loading="lazy"
        />
      </a>
      <div className=" h-48 w-40  border-[1px] border-[#E5E5E5] bg-white  hover:bg-[#F2F2F2]  md:w-56">
        <div className="center    px-3">
          <div className="flex flex-wrap justify-start ">
            <div className="mb-1 text-left text-base font-normal text-[#004B23]">
              <a href={props?.details?.link_to_item} target={"_blank"}>
                <TextTruncate
                  line={2}
                  element="span"
                  className="cursor-pointer text-center"
                  truncateText={""}
                  text={props?.details?.name}
                  textTruncateChild={false}
                />
              </a>

              <Modal show={open} onClose={onClose}>
                <Modal.Header>Name Of The Product</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {props?.details?.name}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
                  </div>
                </Modal.Body>
              </Modal>

              {/* {truncate(props?.details?.name, 3)} */}
            </div>{" "}
            <div className="mb-1 text-left text-xs font-normal text-[#004B23]">
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                className="text-center"
                text={props?.details?.description}
                textTruncateChild={
                  <a
                    className="cursor-pointer hover:underline"
                    onClick={() => setOpenDescription(true)}
                  >
                    read more
                  </a>
                }
              />
              <Modal
                show={openDescription}
                onClose={() => setOpenDescription(false)}
              >
                <Modal.Header>
                  Description Of {props?.details?.name}
                </Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {props?.details?.description}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
                  </div>
                </Modal.Body>
              </Modal>
            </div>{" "}
            <div className="flex items-center justify-between ">
              <div className="mb-2  hidden md:block">
                <StarRatings
                  className=""
                  rating={Math.round(props?.details?.reviews_score)}
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  starSpacing="1px"
                  starRatedColor="#CCFF33"
                />
              </div>
              <div className="mb-2 md:hidden">
                <StarRatings
                  className=""
                  rating={Math.round(props?.details?.reviews_score)}
                  numberOfStars={5}
                  name="rating"
                  starDimension="10px"
                  starSpacing="1px"
                  starRatedColor="#CCFF33"
                />
              </div>

              <a href={props?.details?.link_to_item} target={"_blank"}>
                <p className="ml-2 hidden text-center text-[13px] font-normal text-[#004B23] md:block">
                  {props?.details?.count_of_reviews} Reviews
                </p>
                <p className="ml-2  text-center text-[13px] font-normal text-[#004B23] md:hidden">
                  {props?.details?.count_of_reviews}
                </p>
              </a>
            </div>
          </div>
        </div>
        <a href={props?.details?.link_to_item} target={"_blank"}>
          <div className="flex flex-wrap justify-center px-6 pt-1 pb-2 font-normal text-[#004B23] ">
            {props?.details.original_price_from &&
            props?.details.price_range_from ? (
              <>
                {props?.details.original_price_from ===
                props?.details.original_price_to ? (
                  <>
                    {" "}
                    <s className="text-xs font-normal text-[#C4C4C4] md:text-base ">
                      $ {props?.details?.original_price_from} - $
                      {props?.details?.original_price_to}
                    </s>{" "}
                  </>
                ) : (
                  <></>
                )}
                <span className="text-xs md:text-base">
                  $ {props?.details?.price_range_from} - $
                  {props?.details?.price_range_to}
                </span>
              </>
            ) : (
              <>
                <s className="mr-1 text-xs font-normal text-[#C4C4C4] md:text-base">
                  {props?.details.original_price !== props?.details.price ? (
                    <>$ {props?.details?.original_price} </>
                  ) : (
                    <></>
                  )}
                </s>{" "}
                <span
                  className={`text-xs md:text-base ${
                    showRedColor ? "text-[#C10000]" : ""
                  } `}
                >
                  ${props?.details?.price}
                </span>
              </>
            )}
          </div>
        </a>
      </div>

      {/* <div>
          <h1> {props?.details?.name}</h1>
        </div> */}
    </div>
  );
};

export default Card;
