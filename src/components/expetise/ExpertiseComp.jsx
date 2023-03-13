import React from "react";

const ExpertiseComp = () => {
  const data = [
    {
      id: 1,
      imgUrl:"./woman-to-consult-svgrepo-com.svg",
      title: "Consultancy",
    },
    {
      id: 2,
      imgUrl:"./Coding.svg",
        
      title: "Product Development",
    },
    {
      id: 3,
      imgUrl:"./22_Video Player.svg",
        
      title: "Training",
    },
  ];
  const card = data.map((datas) => {
    return (
      <div className="col-span-3  m-3 md:col-span-1 " key={datas.id}>
        <div class="max-w-sm   bg-white border border-blue-700 rounded-lg shadow-sm-light shadow-green-300 text-gray-900  hover:text-white  hover:scale-none hover:bg-[#FF6902]  md:hover:scale-[1.15]">
          <img
            class=" rounded-t-lg w-full h-56 p-5"
            src={datas.imgUrl}
            alt="cardimage"
          />
          <div class=" p-5 z-40">
            <h5 class="mb-2 text-xl font-bold font-serif tracking-tight leading-none ">
              {datas.title}
            </h5>
          </div>
        </div>
      </div>
    );
  });

  return <div className=" grid grid-cols-3 gap-5 md:gap-32  m-3">{card}</div>;
};

export default ExpertiseComp;
