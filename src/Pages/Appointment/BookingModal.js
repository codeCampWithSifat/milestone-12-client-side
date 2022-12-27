import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selected , setTreatment}) => {
  const {_id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value ;
    console.log(name, _id, slot)
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-center text-secondary">
            {name.toUpperCase()}
          </h3>
          <form className="mt-8" onSubmit={handleBooking}>
            <input
              type="text"
              readOnly
              value={format(selected, "PP")}
              className="input w-full max-w-xs my-2"
            />
            {/* <input
              type="text"
              readOnly
              value={name}
              className="input w-full max-w-xs my-2"
            /> */}
            <select name="slot" className="select w-full max-w-xs">
             {slots.map(slot =>  <option value={slot}>{slot}</option>)}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-full max-w-xs my-2"
            />
            <input
              type="email"
              name="email"
              placeholder=" Email Address"
              className="input w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full max-w-xs my-2"
            />
            <input
              type="submit"
              value="Add Booking"
              placeholder="Type here"
              className="btn btn-secondary text-white w-full max-w-xs my-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
