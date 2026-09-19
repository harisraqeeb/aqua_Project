import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HomeFirst from '../../Components/HomeFirst/HomeFirst'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import Services from '../../Components/Services/Services'
import CircularScroller from '../../Components/CircularScroller/CircularScroller'
import Success from '../../Components/Success/Success'
import Stats from '../../Components/Stats/Stats'
import HowItsWork from '../../Components/HowItsWork/HowItsWork'
import Testimonial from '../../Components/Testimonial/Testimonial'
import BookFree from '../../Components/BookFree/BookFree'
import Faq from '../../Components/Faq/Faq'
import Medical from '../../Components/Medical/Medical'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="HomeFirst_Main">
      <Navbar />
      <HomeFirst />
      <WhyChooseUs />
      <Services />
      <CircularScroller />
      <Success />
      <Stats />
      <HowItsWork />
      <Testimonial />
      <BookFree />
      <Faq />
      <Medical />
      <Footer />
    </div>
  )
}

export default Home
