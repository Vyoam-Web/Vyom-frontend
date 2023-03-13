import React from "react";
import ExpertiseComp from "../expetise/ExpertiseComp";
import Carousels from "../Featured/Carousel";

import NavbarComp from "../Navbar/NavbarComp";

function LandingComp() {
  return (
    <div>
      <NavbarComp />
      <Carousels/>
      <ExpertiseComp />
    </div>
  );
}

export default LandingComp;
