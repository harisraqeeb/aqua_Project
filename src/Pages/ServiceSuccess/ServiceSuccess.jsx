import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Personalizedguide from '../../Components/Personalizedguide/Personalizedguide'
import Boost from '../../Components/Personalizedguide/Boost'
import Consultation from '../../Components/Personalizedguide/Consultation'
import Faq from '../../Components/Faq/Faq'
import BookFree from '../../Components/BookFree/BookFree'
import Footer from '../../Components/Footer/Footer'

const ServiceSuccess = () => {
  return (
    <div className="HomeFirst_Main">
      <Navbar />
      <Personalizedguide />
      <Boost />
      <Consultation />
      <Faq />
      <BookFree />
      <Footer />
    </div>
  )
}

export default ServiceSuccess
