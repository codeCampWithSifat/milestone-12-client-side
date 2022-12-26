import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Treatment = () => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure className="flex-1">
        <img src={treatment} alt="Album" />
      </figure>
      <div class="card-body flex-1 mt-36 ml-16">
        <h2 class="card-title font-bold text-3xl ">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="mt-12">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page.
          <div class="card-actions justify-start mt-12 text-white uppercase">
            <PrimaryButton>Teeth Treatment</PrimaryButton>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Treatment;
