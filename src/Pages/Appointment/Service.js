import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card justify-center items-center bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length === 0 ? "Space" : "Spaces"} Available{" "}
        </p>
        <div className="card-actions justify-center">
          {/* <button
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary text-white"
          >
            Book Appointment
          </button> */}
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
