import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import BothStep from '../../Components/Blogs/BothStep'
import MasteringBasics from '../../Components/Blogs/MasteringBasics'
import ClinicalMastery from '../../Components/Blogs/ClinicalMastery'
import Faq from '../../Components/Faq/Faq'
import BookFree from '../../Components/BookFree/BookFree'
import Footer from '../../Components/Footer/Footer'

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BothStep />
      <MasteringBasics />
      <ClinicalMastery />
      <Faq />
      <BookFree />
      <Footer />
    </div>
  )
}

export default Blogs
