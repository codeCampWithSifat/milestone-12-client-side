import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="px-16">
      <h2 className="text-secondary text-2xl text-center">
        Available Appointment {format(selected, "PP")}.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          selected={selected}
          treatment={treatment}
        />
      )}
      ;
    </div>
  );
};

export default AvailableAppointments;
