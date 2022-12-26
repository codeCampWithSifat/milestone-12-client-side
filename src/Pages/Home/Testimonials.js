import React from "react";
import quote from "../../assets/icons/quote.svg"

const Testimonials = () => {
  return (
    
    <section className="mt-24">
      <div className="flex justify-between">
        <div className="mt-4">
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-4xl mt-4">What Our Patients Say ? </h2>
        </div>
        <div className="h-[156px] w-[192px]">
            <img  src={quote} alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonials;
