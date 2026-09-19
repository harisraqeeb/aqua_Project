import React from 'react'
import Dreams from '../../Components/Dreams/Dreams'
import KeyBenefits from '../../Components/KeyBenefits/KeyBenefits'
import Testimonial from '../../Components/Testimonial/Testimonial'
import BookFree from '../../Components/BookFree/BookFree'
import Footer from '../../Components/Footer/Footer'
import UsmlePlan from '../../Components/UsmlePlan/UsmlePlan'
import ResidencyMatch from '../../Components/UsmlePlan/ResidencyMatch'
import PersonalStatement from '../../Components/UsmlePlan/PersonalStatement'
import TestimonialCarousel from '../../Components/TestimonialCarousel/TestimonialCarousel'

const ServicePage = () => {
  return (
    <div className="HomeFirst_Main">
      <Dreams />
      <KeyBenefits />
      <UsmlePlan />
      <ResidencyMatch />
      <PersonalStatement />
      <TestimonialCarousel />
      <Testimonial />
      <BookFree />
      <Footer />
    </div>
  )
}

export default ServicePage
