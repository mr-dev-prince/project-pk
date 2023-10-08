import React from "react";
import svg1 from "../assets/building-web.svg";
import svg2 from "../assets/finalWave.jpg";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Portfolio from "./Portfolio";
import Feedback from "./Feedback";
import Contact from "./Contact";
import Footer from "./common/Footer";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <div id="Home" className="md:flex md:pr-12 md:pl-44 bg-[#BAF1F4] pt-10">
        <div className=" p-12 flex flex-col justify-center md:p-24 gap-8 md:w-[50%] ">
          <p className=" text-2xl md:text-4xl font-bold tracking-wider">
            Your Success is Our Mission.
          </p>
          <p className="tracking-wider">
            Utilize agile frameworks to create comprehensive summaries for
            top-level insights. Embrace iterative methods in corporate strategy
            to promote collaborative ideation.
          </p>
          <div className=" flex gap-8">
            <HashLink to={"#Contact"}><button className=" h-12 w-36 bg-yellow-300 rounded-xl">Get Started</button></HashLink>
            <HashLink to={"https://youtu.be/pqgSKzugDPg?si=rweTDld_MnD2ThiJ"} target="_blank"><button className=" h-12 w-36 rounded-xl outline outline-black outline-2 hover:bg-black hover:text-white duration-100">
            Watch video
          </button></HashLink>
          </div>
        </div>
        <div className=" md:p-12 md:mt-0 mt-12 flex justify-center items-center">
          <img className=" h-80 md:h-[80%]" src={svg1} alt="" />
        </div>
      </div>
      <div className=" w-full">
        <img className=" w-full " src={svg2} alt="" />
      </div>
      <About/>
      <Services/>
      <Team/>
      <Portfolio/>
      <Feedback/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
