import React from "react";
import svg1 from "../assets/building-web.svg";
import svg2 from "../assets/wave-bg-3.png";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="md:flex md:pr-12 md:pl-44 bg-[#545454]">
        <div className=" p-12 flex flex-col justify-center md:p-24 gap-8 md:w-[50%] ">
          <p className=" text-2xl md:text-4xl font-bold text-white tracking-wider">
            Your Success is Our Mission.
          </p>
          <p className=" text-white tracking-wider">
            Utilize agile frameworks to create comprehensive summaries for
            top-level insights. Embrace iterative methods in corporate strategy
            to promote collaborative ideation.
          </p>
          <div className=" flex gap-8">
            <button className=" h-12 w-36 bg-yellow-300">Get Started</button>
            <button className=" h-12 w-36 text-white outline outline-white hover:bg-white hover:text-black duration-300">
              Watch video
            </button>
          </div>
        </div>
        <div className=" md:p-12 md:mt-0 mt-12 flex justify-center items-center">
          <img className=" h-80 md:h-[80%]" src={svg1} alt="" />
        </div>
      </div>
      <div className=" w-full">
        <img className=" w-full h-96" src={svg2} alt="" />
      </div>
      <About/>
      <Services/>
    </>
  );
};

export default Home;
