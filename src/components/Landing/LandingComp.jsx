import React from 'react'
import NavbarComp from '../Navbar/NavbarComp'
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";
import ExpertiseComp from "../expetise/ExpertiseComp";
import Carousels from "../Featured/Carousel";
function LandingComp() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <NavbarComp />
      <Carousels />
      <ExpertiseComp/>
      <Testimonials/>
      <NewsLetter/>
    </div>
  );
}

export default LandingComp;
