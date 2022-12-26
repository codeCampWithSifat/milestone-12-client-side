import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const HomePageAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center mt-40 rounded-lg"
    >
      <div className="flex-1 mt-[-140px] hidden lg:block">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white sm:m-8">
        <h3 className="text-xl text-primary font-sans">Appoinment</h3>
        <h2 className="text-3xl my-4">Make An Appoinment Today</h2>
        <div>
          <p className="my-4 pr-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
       <PrimaryButton>Get Appoinment</PrimaryButton>
      </div>
    </section>
  );
};

export default HomePageAppoinment;
