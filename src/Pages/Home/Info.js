import React from 'react'
import InfoCards from './InfoCards'
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <InfoCards img={clock} />
      <InfoCards img={marker} />
      <InfoCards img={phone} />
    </div>
  )
}

export default Info
