import React from "react";

const Review = ({ review }) => {
  const { img, name, reviewText } = review;
  return (
    <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{reviewText}</p>

        <div class="flex mt-10">
          <div class="avatar">
            <div class="w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
            <h2 class="text-xl ml-6 mt-5">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
