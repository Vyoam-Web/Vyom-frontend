import React,{useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
// import x1 from '../../assets/x1.png'
const Carousels = () => {
  const slides = [
    {
      url:"./x1.png" ,
      quote:'Develop a passion for learning. If you do, you will never cease to grow.'
    },
    {
    
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',

      
      quote:'Develop a passion for learning. If you do, you will never cease to grow.'

    },
    {
      url: './x1.png',
      quote:'Develop a passion for learning. If you do, you will never cease to grow.'
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      quote:'Develop a passion for learning. If you do, you will never cease to grow.'
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      quote:'Develop a passion for learning. If you do, you will never cease to grow.'

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (

    <div className='max-w-full h-80 md:h-[40rem] w-full m-auto mt-1 py-10 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-md md:rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#272F56] text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#272F56] text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <button className="hidden group-hover:block absolute top[70%] md:top-[85%] translate-x-[35vw] md:translate-x-[45vw] translate-y-[-100%] md:translate-y-[-50%] text-center text-sm outline-none p-2 rounded-md px-4 bg-[#272F56] text-white cursor-pointer">
         See More
      </button>
      <div className=" hidden md:block font-bold   absolute top-[50%]  md:translate-x-[25vw]  translate-y-[-50%] text-center text-2xl outline-none px-4 bg-blend-color-burn text-white cursor-pointer justify-center">
        <p className=" w-[50vw]">{slides[currentIndex].quote}</p> 
      </div>
      
    </div>
  );
};

export default Carousels;
