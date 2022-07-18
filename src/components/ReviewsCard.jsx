import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import TextTruncate from "react-text-truncate";
import { truncate } from "../Helpers/Index";

import { Modal } from "flowbite-react";

const ReviewsCard = ({ title, description, rating, name, picture, link }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  console.log(description,title,name)
  return (
    <div
      className={`pt-18 container mx-auto   pl-6 pr-6  ${
        description && title && picture && rating ? "" : "hidden"
      }`}
    >
      {/* card */}
      <a href={link} target={"_blank"}>
        <div className="relative left-24 top-20 mt-4 h-32  w-32 rounded-full bg-white   ">
          <img
            src={picture}
            className="h-32 w-32 rounded-full  object-contain"
            alt="review Product"
          />
        </div>
      </a>

      <div className="h-min-[288px] h-[290px] w-80 rounded-[42px]  bg-[#EEEEEE69] ">
        <div className="pt-24">
          <a href={link} target="_blank">
            <h1 className="text-center text-lg font-normal text-[#004B23]">
              <TextTruncate
                line={1}
                element="h5"
                className="cursor-pointer text-center"
                truncateText=""
                text={title}
                textTruncateChild=""
              />
            </h1>
          </a>
        </div>
        <div className="p-6">
          <h2 className="text-left text-base font-normal text-[#004B23]">
             <TextTruncate
              line={3}
              element="h5"
              className="cursor-pointer text-center"
              truncateText="..."
              text={description}
              textTruncateChild={
                <a
                  className="cursor-pointer hover:underline"
                  onClick={() => setOpen(true)}
                >
                  read more
                </a>
              }
            />

            <Modal show={open} onClose={onClose}>
              <Modal.Header>Review By {name}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
                </div>
              </Modal.Body>
            </Modal>
          </h2>
        </div>
        <a href={link} target={"_blank"}>
          <div className="flex justify-start pb-6 pl-2  ">
            {/* <StarRatings
            rating={Math.round(rating)}
            numberOfStars={5}
            name="rating"
            starDimension="10px"
            starSpacing="5px"
            starRatedColor="#FFDD00"
          /> */}
            <h1 className="ml-4 text-base font-normal  text-[#004B23]">
              {name}
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ReviewsCard;
