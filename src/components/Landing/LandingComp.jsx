import React from "react";
import NavbarComp from "../Navbar/NavbarComp";
import Testimonials from "./Testimonials";

function LandingComp() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <NavbarComp />
      <Testimonials />
    </div>
  );
}

export default LandingComp;
