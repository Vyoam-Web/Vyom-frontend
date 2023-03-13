import React from "react";
import NavbarComp from "../Navbar/NavbarComp";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";

function LandingComp() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <NavbarComp />
      <Testimonials />
      <NewsLetter/>
    </div>
  );
}

export default LandingComp;
