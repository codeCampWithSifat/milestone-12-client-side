import React from 'react'
import InfoCards from './InfoCards'
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      <InfoCards bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Opening Hours"  img={clock} />
      <InfoCards bgClass="bg-accent" cartTitle="Our Location" img={marker} />
      <InfoCards bgClass="bg-gradient-to-r from-secondary to-primary" cartTitle="Contact Us" img={phone} />
    </div>
  )
}

export default Info
