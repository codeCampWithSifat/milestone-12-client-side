import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading] = useAuthState(auth);
  const formattedDate = format(selected, "PP");
  if (loading) {
    return <Loading />;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot: slot,
      patientEmail: user.email,
      patientName: user.displayName,
      address,
      phoneNumber: phone,
    };

    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Add Your Booking Successfully");
          setTreatment(null);
        }
      });
  };
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
              disabled
              className="input w-full max-w-xs my-2"
            />
            {/* <input
              type="text"
              readOnly
              value={name}
              className="input w-full max-w-xs my-2"
            /> */}
            <select name="slot" className="select w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              readOnly
              disabled
              className="input w-full max-w-xs my-2"
            />
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              disabled
              className="input w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input w-full max-w-xs my-2"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full max-w-xs my-2"
              required
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
