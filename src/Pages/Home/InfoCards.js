import React from "react";

const InfoCards = ({ img, cartTitle, bgClass }) => {
  return (
    <div class={`card lg:card-side  shadow-xl ${bgClass} text-white`}>
      <figure className="pl-5 ">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">{cartTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCards;
