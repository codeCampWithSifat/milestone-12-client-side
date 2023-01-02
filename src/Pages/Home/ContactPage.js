import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactPage = () => {
  return (
    <div className="rounded-lg" style={{ background: `url(${appointment})` }}>
      <div className="mt-24 mx-auto w-2/4">
        <h2 className="text-2xl text-primary text-center mt-5 p-2">
          Contact Us
        </h2>
        <h2 className="text-2xl text-secondary text-center p-2">
          Stay Connected With Us
        </h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input w-full my-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input w-full my-2"
          />
          <textarea
            className="textarea w-full my-2"
            placeholder="Description"
          ></textarea>
          <button
            type="submit"
            className="mb-8 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full"
          >
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
