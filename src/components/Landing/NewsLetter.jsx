import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-gray-50 text-xl text-black w-[100vw] text-center h-auto border-t-4 mx-10 border-black flex flex-col items-center justify-start py-5  ">
      <h1 className="text-5xl font-bold py-10">
        Never miss important updates!{" "}
      </h1>
      <div className="w-full flex justify-center items-center gap-2 flex-wrap mx-10">
        <input
          className="w-3/5 border-2 text-3xl font-bold placeholder-gray-400 "
          type="email"
          placeholder="Enter your E-mail"
        />
        <button className="px-7 py-[0.9rem] bg-[#272F56]">press</button>
      </div>
    </section>
  );
};

export default NewsLetter;
