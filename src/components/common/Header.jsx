import React from "react";
import { HashLink } from "react-router-hash-link";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className=" h-12 w-full bg-[#545454] text-white flex justify-between p-12 md:p-12 md:justify-around  items-center ">
      <p className=" text-2xl font-bold">CircuitMinds Agency </p>
      <div className="gap-12 hidden md:flex  ">
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"#about"}>About</HashLink>
        <HashLink to={"/team"}>Team</HashLink>
        <HashLink to={"/home"}>Portfolio</HashLink>
        <HashLink to={"#services"}>Services</HashLink>
        <HashLink to={"/home"}>Contact Us</HashLink>
        <button className=" h-8 w-24 bg-yellow-300 text-black">Get Started</button>
      </div>
      <button className=" md:hidden"><MenuIcon size={"36"} className=" md:hidden" /></button>
    </div>
  );
};

export default Header;
