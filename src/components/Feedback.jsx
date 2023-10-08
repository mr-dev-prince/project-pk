import React from "react";
import pic1 from "../assets/keshav.jpg";

const Feedback = () => {
  return (
    <div className=" mt-8 ">
      <p className="text-center text-4xl mb-4">Client Testomonials</p>
      <div className=" w-full md:flex flex-wrap bg-[#dff4f5] md:pl-44 md:pr-44 justify-center items-center">
        <div className="md:w-[40%] p-8">
          <p className=" mb-4">
            Bring to the table win-win survival strategies to ensure proactive
            domination. User generated content in real-time will have multiple
            touchpoints for offshoring.
          </p>
          <div className=" flex justify-end gap-4">
            <div className=" flex flex-col ">
              <p className="mt-12 tracking-wider font-semibold">Robb Stark</p>
              <p>CEO/ InternHut</p>
            </div>
            <img src={pic1} alt="" className="rounded-md h-24 self-end" />
          </div>
        </div>
        <div className=" md:w-[40%] p-8 ">
          <p className=" mb-4">
            Bring to the table win-win survival strategies to ensure proactive
            domination. User generated content in real-time will have multiple
            touchpoints for offshoring.
          </p>
          <div className=" flex justify-end gap-4  ">
            <div className=" flex flex-col">
              <p className="mt-12 tracking-wider font-semibold">Jon Snow</p>
              <p>CEO/ InternHut</p>
            </div>
            <img src={pic1} alt="" className="rounded-md h-24" />
          </div>
        </div>
        <div className="md:w-[40%] p-8">
          <p className=" mb-4">
            Bring to the table win-win survival strategies to ensure proactive
            domination. User generated content in real-time will have multiple
            touchpoints for offshoring.
          </p>
          <div className=" flex justify-end gap-4 ">
            <div className=" flex flex-col">
              <p className="mt-12 tracking-wider font-semibold" >Juan Sammy</p>
              <p>CEO/ InternHut</p>
            </div>
            <img src={pic1} alt="" className="rounded-md h-24" />
          </div>
        </div>
        <div className="md:w-[40%] p-8">
          <p className=" mb-4">
            Bring to the table win-win survival strategies to ensure proactive
            domination. User generated content in real-time will have multiple
            touchpoints for offshoring.
          </p>
          <div className=" flex justify-end gap-4 ">
            <div className=" flex flex-col">
              <p className="mt-12 tracking-wider font-semibold">Alex Carey</p>
              <p>CEO/ InternHut</p>
            </div>
            <img src={pic1} alt="" className="rounded-md h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
