import { Button } from "@mui/material";
import React from "react";
import png1 from "../assets/graphic-design.png";
import png2 from "../assets/ui-ux.png";
import png3 from "../assets/web-design.png";
import clipboard from "../assets/clipboard-check.svg";
import smile from "../assets/smile-plus.svg";
import sheet from "../assets/file-spreadsheet.svg";
import clock from "../assets/clock.svg";

const Services = () => {
  return (
    <div id="Services" className=" bg-[#dff4f5] md:pt-24">
      <div className="w-full flex flex-col justify-center items-center">
        <p className=" text-5xl font-bold p-12">Our Services</p>
        <p className=" text-xl tracking-wide w-[50%] text-center">
          Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
        </p>
        <div className=" flex flex-wrap gap-24 mt-12 mb-24 p-8 justify-center items-center">
          <div className=" md:h-72 md:w-80 bg-white rounded-md flex flex-col justify-around items-center text-center md:p-2 md:pt-16 p-8 md:gap-2 gap-8 relative pt-16">
            <div className="absolute -top-12 h-24 w-24 outline outline-8 bg-white outline-[#dff4f5] rounded-full grid items-center justify-center">
              {" "}
              <img className=" h-16" src={png3} alt="" />
            </div>

            <p className="text-2xl font-semibold">Web Design</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae error odio similique, aspernatur sit,
            </p>
            <Button variant="text">Learn More</Button>
          </div>
          <div className=" md:h-72 md:w-80 bg-white rounded-md flex flex-col justify-around items-center text-center md:p-2 md:pt-16 p-8 md:gap-2 gap-8 relative pt-16 ">
            <div className="absolute -top-12 h-24 w-24 outline outline-8 bg-white outline-[#dff4f5] rounded-full grid items-center justify-center ">
              <img className=" h-16" src={png2} alt="" />
            </div>
            <p className="text-2xl font-semibold">Grahic Design</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae error odio similique, aspernatur sit,
            </p>
            <Button variant="text">Learn More</Button>
          </div>
          <div className=" md:h-72 md:w-80 bg-white rounded-md flex flex-col justify-around items-center text-center md:p-2 md:pt-16 p-8 md:gap-2 gap-8 relative pt-16">
            <div className="absolute -top-12 h-24 w-24 outline outline-8 bg-white outline-[#dff4f5] rounded-full grid items-center justify-center ">
              <img className=" h-16" src={png1} alt="" />
            </div>
            <p className="text-2xl font-semibold">UI / UX</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae error odio similique, aspernatur sit,
            </p>
            <Button variant="text">Learn More</Button>
          </div>
        </div>
      </div>
      <div className=" w-full  bg-[#0a474a] flex flex-wrap p-8 md:p-24 gap-12 justify-center items-center">
        <div className="flex gap-4">
          <div className="text-xl">
            <img className=" h-16 filter invert" src={clipboard} alt="" />
          </div>
          <div className=" text-white">
            <p className="text-3xl font-bold p-1">325</p>
            <p className=" font-semibold">Projects Done</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-xl">
            <img className=" h-16 filter invert" src={smile} alt="" />
          </div>
          <div className=" text-white">
            <p className="text-3xl font-bold p-1">145</p>
            <p className=" font-semibold">Happy clients</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-xl">
            <img className=" h-16 filter invert" src={sheet} alt="" />
          </div>
          <div className=" text-white">
            <p className="text-3xl font-bold p-1">100+</p>
            <p className=" font-semibold">Appreciations</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-xl">
            <img className=" h-16 filter invert" src={clock} alt="" />
          </div>
          <div className=" text-white">
            <p className="text-3xl font-bold p-1">500+</p>
            <p className=" font-semibold">Hours Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
