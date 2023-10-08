import React from "react";
import ImageList from "../components/ImageList";

const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className=" w-full flex justify-center items-center flex-col md:pt-28"
    >
      <p className=" text-center text-5xl font-bold mb-10">Portfolio</p>
      <div className=" flex gap-4">
        <ImageList />
        <div className=" hidden md:flex">
          <ImageList />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
