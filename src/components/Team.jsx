import React from "react";
import img1 from "../assets/36.jpg"
import img2 from "../assets/73.jpg"
import img3 from "../assets/46.jpg"

const Team = () => {
  return (
    <div className=" w-full md:pt-24" id="Team">
      <p className="text-center p-16 text-5xl font-bold">Meet our team </p>
      <div className=" md:pl-56 md:pr-56 w-full p-12 flex flex-wrap gap-12">
        <div className=" md:w-[30%] w-full outline h-96 rounded-md">
          <img className=" h-[80%] w-full" src={img1} alt="" />
          <p className=" text-center text-2xl font-bold tracking-wider">Priyesh Kurmi</p>
          <p className=" text-center text-xl font-semibold tracking-wider">Web Developer</p>
        </div>
        <div className="  md:w-[30%] w-full outline h-96 rounded-md">
          <img className=" h-[80%] w-full" src={img2} alt="" />
          <p className=" text-center text-2xl font-bold tracking-wider">RamKrishna Dangi</p>
          <p className=" text-center text-xl font-semibold tracking-wider">Web Developer</p>
        </div>
        <div className=" md:w-[30%] w-full outline h-96 rounded-md">
          <img className=" h-[80%] w-full" src={img3} alt="" />
          <p className=" text-center text-2xl font-bold tracking-wider">Keshav Sahu</p>
          <p className=" text-center text-xl font-semibold tracking-wider">Web Developer</p>
        </div>
        
      </div>
    </div>
  );
};

export default Team;
