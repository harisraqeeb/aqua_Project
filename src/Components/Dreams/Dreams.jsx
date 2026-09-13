import React from 'react';
import "./Dreams.css";
import Navbar from '../Navbar/Navbar';

const Dreams = () => {
  return (
    <div className='DreamsMAin'>
      {/* White text + Dark background logo */}
      <Navbar isDarkBg={true} darkLogoSrc="/Images/logo-white.svg" />

      <div className='DreamsMAin1'>
        <p className='DreamsMAin1_P1'>Achieve Your Medical Dreams with Expert Guidance</p>
        <p className='DreamsMAin1_P2'>
          Take the first step toward USMLE success and your dream residency with our expert guidance. From personalized tutoring to application support and interview prep, we offer tailored solutions to help you succeed.
        </p>
      </div>
    </div>
  );
};

export default Dreams;