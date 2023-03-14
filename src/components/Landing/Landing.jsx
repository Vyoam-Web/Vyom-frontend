import React from 'react'
import NavbarComp from '../Navbar/NavbarComp'
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";
import ExpertiseComp from "./ExpertiseComp";
import Carousels from "./Carousel";
import FooterComp from '../Footer/FooterComp';
function LandingComp() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <NavbarComp />
      <Carousels />
      <ExpertiseComp />
      <Testimonials />
      <NewsLetter />
      <FooterComp />
    </div>
  );
}

export default LandingComp;
