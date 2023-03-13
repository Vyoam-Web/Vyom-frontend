import React from "react";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import testimonial4 from "../../assets/testimonial4.png";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 text-xl text-black w-[100vw] text-center h-auto border-t-4 mx-5 border-black flex flex-col items-center justify-start py-5 bg-red-200 mt-[5rem] ">
      <h1 className="font-bold text-5xl">What clients say about us!</h1>
      <div className="flex items-center justify-evenly w-full  flex-wrap gap-10 scale-[85%] bg-yellow-200">
        <div className="flex w-[27rem] p-5 border-[0.2rem] border-black text-center justify-center items-center">
          <img className="w-32 h-32" src={testimonial1} alt="testimonial1" />
          <h2 className="font-bold text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            officia.
          </h2>
        </div>
        <div className="flex w-[27rem] p-5 border-[0.2rem] border-black text-center justify-center items-center">
          <img className="w-32 h-32" src={testimonial2} alt="testimonial1" />
          <h2 className="font-bold text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            officia.
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-evenly w-full  flex-wrap gap-10 scale-[85%] bg-yellow-200 ">
        <div className="flex w-[27rem] p-5 border-[0.2rem] border-black text-center justify-center items-center">
          <img className="w-32 h-32" src={testimonial3} alt="testimonial1" />
          <h2 className="font-bold text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            officia.
          </h2>
        </div>
        <div className="flex w-[27rem] p-5 border-[0.2rem] border-black text-center justify-center items-center">
          <img className="w-32 h-32" src={testimonial4} alt="testimonial1" />
          <h2 className="font-bold text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            officia.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
