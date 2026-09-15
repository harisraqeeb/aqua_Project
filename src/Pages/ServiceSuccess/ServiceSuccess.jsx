import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Personalizedguide from '../../Components/Personalizedguide/Personalizedguide'
import Boost from '../../Components/Personalizedguide/Boost'
import Consultation from '../../Components/Personalizedguide/Consultation'

const ServiceSuccess = () => {
  return (
   <div className="HomeFirst_Main">
       <Navbar/>
       <Personalizedguide/>
       <Boost/>
       <Consultation/>
      </div>
  )
}

export default ServiceSuccess
