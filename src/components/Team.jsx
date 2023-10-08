import React from "react";
import img1 from "../assets/priyesh.jpg"
import img2 from "../assets/ramu.jpg"
import img3 from "../assets/sahil.jpg"
import img4 from "../assets/keshav.jpg"
import img5 from "../assets/prince.jpg"

const Team = () => {
  return (
    <div className=" w-full md:pt-24" id="Team">
      <p className="text-center p-16 text-5xl font-bold">Meet our team </p>
      <p className="text-center font-semibold">Meet the team that makes email marketing magic happens!</p>
      <div className=" md:pl-56 md:pr-56 w-full p-12 flex justify-center flex-wrap gap-12">
        <div className="rounded-full text-center">
          <img className=" h-64 w-64 rounded-full" src={img1} alt="" />
          <p className=" font-semibold mt-4 text-3xl">Priyesh Kurmi</p>
          <p className=" font-serif">Marketing Lead</p>
        </div>
        <div className="rounded-full text-center">
          <img className=" h-64 w-64 rounded-full" src={img2} alt="" />
          <p className=" font-semibold mt-4 text-3xl">RamKrishna Dangi</p>
          <p className=" font-serif">Email Managing</p>
        </div>
        <div className="rounded-full text-center">
          <img className=" h-64 w-64 rounded-full" src={img3} alt="" />
          <p className=" font-semibold mt-4 text-3xl">Sahil Vishwakarma</p>
          <p className=" font-serif">Team Member</p>
        </div>
        <div className="rounded-full text-center">
          <img className=" h-64 w-64 rounded-full" src={img4} alt="" />
          <p className=" font-semibold mt-4 text-3xl">Keshav Sahu</p>
          <p className=" font-serif">Team Member</p>
        </div>
        <div className="rounded-full text-center">
          <img className=" h-64 w-64 rounded-full" src={img5} alt="" />
          <p className=" font-semibold mt-4 text-3xl">Prince Chaurasia</p>
          <p className=" font-serif">Team Member</p>
        </div>
        
      </div>
    </div>
  );
};

export default Team;
