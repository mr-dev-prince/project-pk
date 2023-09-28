import { Avatar, Button } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <div id="services" className=" bg-neutral-300">
      <div className="w-full flex flex-col justify-center items-center">
        <p className=" text-3xl font-bold p-12">Our Services</p>
        <p className=" text-xl tracking-wide w-[50%] text-center">
          Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
        </p>
        <div className=" md:flex gap-8 mt-12 p-8  ">
          <div className=" h-56 w-64 bg-white rounded-md flex flex-col justify-around items-center text-center p-2 ">
            <Avatar></Avatar>
            <p>Web Design</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae error odio similique, aspernatur sit,
            </p>
            <Button variant="text">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
