import {
  CalendarCheck,
  MessageSquarePlus,
  Palette,
  Users2,
} from "lucide-react";
import React from "react";
import svg3 from "../assets/illus1.png";
import svg4 from "../assets/icons8-ok.svg";
import svg5 from "../assets/illus4.png";
import svg6 from "../assets/illus3.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import BasicTabs from "./BasicTabs";

const About = () => {
  return (
    <div id="About" className="pt-24">
      <div className=" w-full">
        <div className=" flex flex-col justify-center items-center p-4">
          <p className=" text-5xl font-bold">Work With Us</p>
          <p className="mt-12 tracking-wider text-center w-[60%] text-xl">
            At LoopiEmail, We are more than just email marketing experts. We're passionate about helping business thrive through effective email marketing campaigns.
          </p>
        </div>
        <div className=" md:pl-16 md:pr-12 p-8 flex flex-col md:flex-row gap-12 select-none">
          <div className=" h-64 rounded-xl w-full bg-[#7fc37e] flex flex-col items-center p-8 gap-6">
            <Palette size={"48px"} />
            <p className=" text-2xl font-semibold tracking-wider">Design</p>
            <p>
              Get modern designs made by us and engage more users than ever.
            </p>
          </div>
          <div className=" h-64 rounded-xl w-full bg-[#7fc37e] flex flex-col items-center p-8 gap-6">
            <MessageSquarePlus size={"48px"} />
            <p className=" text-2xl font-semibold tracking-wider">Feedback</p>
            <p>
              We appreciate your feedback. Help us improve by sharing your
              thoughts.
            </p>
          </div>
          <div className=" h-64 rounded-xl w-full bg-[#7fc37e] flex flex-col items-center p-8 gap-6">
            <CalendarCheck size={"48px"} />
            <p className=" text-2xl font-semibold tracking-wider">Execution</p>
            <p>High priority execution without any hussle.</p>
          </div>
          <div className=" h-64 rounded-xl w-full bg-[#7fc37e] flex flex-col items-center p-8 gap-6">
            <Users2 size={"48px"} />
            <p className=" text-2xl font-semibold tracking-wider">Support</p>
            <p>24x7 peer-to-peer support.</p>
          </div>
        </div>
      </div>
      <div className=" w-full md:flex md:flex-row-reverse md:pl-12 md:pr-12 justify-center items-center mt-12">
        <div className=" mt-12 flex justify-center items-center ">
          <img className=" h-[90%]" src={svg3} alt="" />
        </div>
        <div className="mt-4 p-8 md:w-[80%]">
          <p className="text-2xl font-bold tracking-wide">
            Let our team handle all the work and serve your needs.
          </p>
          <p className="mt-8 md:mt-12 text-xl">
            Leave the heavy lifting to us. At LoopiEmail, our dedicated team is here to handle all the work and serve your needs. Your success is our mission and we are ready to roll up our sleeves and get to work for you!
          </p>

          <div className=" mt-8 md:mt-12 flex flex-col gap-8 md:grid md:grid-cols-2">
            <div className=" h-12 w-full md:w-56 outline outline-1 rounded-lg flex items-center p-4  ">
              <img src={svg4} alt="" />
              <p className="capitalize ml-8 ">Active collaboration</p>
            </div>
            <div className=" h-12 w-full outline outline-1 rounded-lg flex items-center p-4 ">
              <img src={svg4} alt="" />{" "}
              <p className="capitalize ml-8 ">on schedule delivery</p>
            </div>
            <div className=" h-12 w-full outline outline-1 rounded-lg flex items-center p-4  ">
              <img src={svg4} alt="" />
              <p className="capitalize ml-8 ">after sales services</p>
            </div>
            <div className=" h-12 w-full outline outline-1 rounded-lg flex items-center p-4  ">
              <img src={svg4} alt="" />
              <p className="capitalize ml-8 ">24x7 On-support </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:pl-44 md:pr-44 md:flex mt-24 gap-12">
        <div className=" flex justify-center items-center">
          <img className="h-[80%] w-[180%]" src={svg5} alt="" />
        </div>
        <div className="mt-4 p-8">
          <p className="text-3xl font-bold tracking-wide">
            We deliver the best in class result.
          </p>
          <p className="mt-8 md:mt-12 text-xl">
            Our work is the best in the buisness. You can trust us with your
            eyes shut. We are trusted by some of the most renowned organisations
            in the market.
          </p>
          <div className="mt-8 w-full h-16 p-2 outline outline-1 rounded-md">
            <p className=" text-sm font-semibold mb-3">Proven Strategies</p>
            <div className=" h-2 w-full bg-slate-200 rounded-xl">
              <div className=" h-full w-[95%] bg-[#7fc37e] rounded-xl"></div>
            </div>
          </div>
          <div className=" mt-8 w-full h-16 p-2 outline outline-1 rounded-md">
            <p className=" text-sm font-semibold mb-3">Email Design</p>
            <div className=" h-2 w-full bg-slate-200 rounded-xl">
              <div className=" h-full w-[85%] bg-[#7fc37e] rounded-xl"></div>
            </div>
          </div>
          <div className=" mt-8 w-full h-16 p-2 outline outline-1 rounded-md">
            <p className=" text-sm font-semibold mb-3">Copywriting</p>
            <div className=" h-2 w-full bg-slate-200 rounded-xl">
              <div className=" h-full w-[90%] bg-[#7fc37e] rounded-xl"></div>
            </div>
          </div>
          <div className=" mt-8 w-full h-16 p-2 outline outline-1 rounded-md">
            <p className=" text-sm font-semibold mb-3">After Sales Services</p>
            <div className=" h-2 w-full bg-slate-200 rounded-xl">
              <div className=" h-full w-[90%] bg-[#7fc37e] rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse md:pl-44 md:pr-44 mt-24">
        <div className="flex justify-center items-center md:w-[50%]">
          <img className=" h-[80%]" src={svg6} alt="" />
        </div>
        <div className="mt-8 p-8 md:w-[50%]">
          <p className="text-3xl font-bold tracking-wide">
            We believe in Long Term Partnership.
          </p>
          <p className="mt-8 mb-12 text-xl">
            At LoopiEmail, we're not just about quick wins; we're here for the long haul. We are committed to building lasting parterships that drives success!
          </p>
          <BasicTabs />
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center mt-24 mb-10">
        <p className="text-4xl font-semibold">Trusted By</p>
        <p className="p-8 text-center text-xl tracking-wide">
          Collaboratively administrate empowered markets via plug-and-play
          networks.
        </p>
        <div className=" mt-12 flex flex-wrap gap-12 justify-center items-center md:w-full md:pl-44 md:pr-44">
          <img className=" h-24 md:h-44" src={logo1} alt="" />
          <img className=" h-24 md:h-44" src={logo2} alt="" />
          <img className=" h-24 md:h-44" src={logo3} alt="" />
          <img className=" h-24 md:h-44" src={logo4} alt="" />
          <img className=" h-24 md:h-44" src={logo5} alt="" />
          <img className=" h-24 md:h-44" src={logo2} alt="" />
          <img className=" h-24 md:h-44" src={logo4} alt="" />
          <img className=" h-24 md:h-44" src={logo3} alt="" />
          <img className=" h-24 md:h-44" src={logo1} alt="" />
          <img className=" h-24 md:h-44" src={logo3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
