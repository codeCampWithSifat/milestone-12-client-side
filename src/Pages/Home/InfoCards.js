import React from "react";

const InfoCards = ({ img, cartTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side  shadow-xl ${bgClass} text-white pt-5`}>
      <figure className="pl-5 ">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{cartTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCards;
