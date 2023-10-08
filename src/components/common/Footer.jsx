import React from "react";
import logo from "../common/logo/loopiemail3.png";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsDiscord, BsTwitter, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[35%] w-full bg-[#333333] backdrop-blur-2xl p-8 flex justify-between">
      <div className="h-full w-[90%] lg:w-[20%]">
        <div className=" flex text-white text-2xl justify-start items-center font-bold ">
          <img className=" h-20" src={logo} alt="" />
          <h1>LoopiEmail.online</h1>
        </div>
        <p className=" text-white mb-5 tracking-wide">
          Feel free to contact us. Here's Our social media Handles:
        </p>
        <div className="w-full flex justify-between text-3xl invert-[1] mb-5">
          <div className="filter cursor-pointer hover:opacity-100">
            <AiFillFacebook />
          </div>
          <div className=" filter cursor-pointer hover:opacity-100">
            <AiFillLinkedin />
          </div>
          <div className="filter cursor-pointer hover:opacity-100">
            <BsDiscord />
          </div>
          <div className="filter cursor-pointer hover:opacity-100">
            <BsTelegram />
          </div>
          <div className="filter cursor-pointer hover:opacity-100">
            <BsTwitter />
          </div>
        </div>
        <p className=" text-white"> &#169; loopiemail.org 2023 all rights reserved</p>
      </div>
      <div className="px-10 w-[70%] hidden justify-between lg:flex ">
        <div className="text-white w-[20%] tracking-wider ">
          <h1 className="text-xl mb-5 font-semibold">Explore</h1>
          <p>Art</p>
          <p>Collection</p>
          <p>Domain Name</p>
          <p>Utility</p>
        </div>
        <div className="text-white w-[20%] tracking-wider">
          <h1 className="text-xl mb-5 font-semibold">Statics</h1>
          <p>Ranking</p>
          <p>Activity</p>
        </div>
        <div className="text-white w-[20%] tracking-wider">
          <h1 className="text-xl mb-5 font-semibold">Resources</h1>
          <p>Help Center</p>
          <p>Platform Status</p>
          <p>Partners</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div>
        <div className="text-white w-[20%] tracking-wider">
          <h1 className="text-xl mb-5 font-semibold">Company</h1>
          <p>About Us</p>
          <p>Career</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
