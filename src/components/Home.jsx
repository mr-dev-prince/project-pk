import React from "react";
import svg1 from "../assets/illus2.png";
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
      <div id="Home" className="md:flex md:pr-12 md:pl-44 bg-[#7fc37e] pt-10">
        <div className=" p-12 flex flex-col justify-center md:p-24 gap-8 md:w-[50%] ">
          <p className=" text-2xl md:text-4xl font-bold tracking-wider">
            Unlock Your Email Marketing Success with{" "}
            <span className=" text-red-700 text-3xl">LoopiEmail !</span>
          </p>
          <p className="tracking-wider">
            Welcome to LoopiEmail, where email marketing excellence begins. We are your trusted partner in email marketing solutions, dedicated to transforming your buisness by leveraging the power of email.
          </p>
          <div className=" flex flex-col gap-4">
          <p>Ready to boost your Email marketing Game? Let's get Started</p>
            <HashLink to={"#Contact"}>
              <button className=" h-12 w-64 bg-[#fefee2] rounded-xl">
                Get Started
              </button>
            </HashLink>
          </div>
        </div>
        <div className=" md:p-12 md:mt-0 mt-12 flex justify-center items-center">
          <img className=" h-80 md:h-[80%]" src={svg1} alt="" />
        </div>
      </div>
      <div className=" w-full">
        <img className=" w-full " src={svg2} alt="" />
      </div>
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
