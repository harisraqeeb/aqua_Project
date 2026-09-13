import React from 'react'
import Dreams from '../../Components/Dreams/Dreams'
import KeyBenefits from '../../Components/KeyBenefits/KeyBenefits'
import Testimonial from '../../Components/Testimonial/Testimonial'
import BookFree from '../../Components/BookFree/BookFree'
import Footer from '../../Components/Footer/Footer'


const ServicePage = () => {
  return (
    <div className="HomeFirst_Main">
        <Dreams/>
       <KeyBenefits/>


<Testimonial/>
       <BookFree/>
            <Footer/>
    </div>
  )
}

export default ServicePage
