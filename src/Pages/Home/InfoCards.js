import React from "react";

const InfoCards = ({ img }) => {
  return (
    <div class="card lg:card-side  shadow-xl bg-accent text-white px-4">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCards;
