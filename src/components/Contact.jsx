import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import Buttons from "./common/Buttons";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const notify = () => toast.success("Message Sent! THANK YOU!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytnjk8z",
        "template_y72fgng",
        form.current,
        "lAu4kJmbBGbHRmY8f"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="Contact"
      className=" pt-24 mt-8 grid md:flex flex-col justify-center items-center gap-9 mb-12"
    >
      <p className=" text-center text-5xl pb-8 font-semibold">Book a Call Now!</p>
      <div className="flex flex-col md:pl-24 md:w-full md:flex-row justify-center items-center gap-24 ">
        <div> 
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-6 w-96 bg-[#7fc37e] p-4 rounded-md"
          >
            <div className="flex flex-col gap-1">
              <label className=" font-semibold">Your Name</label>
              <input
                type="text"
                name="user_name"
                className=" capitalize outline outline-2 rounded-md p-1"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label className=" font-semibold">Your Email</label>
              <input
                type="email"
                name="user_email"
                className=" outline outline-2 rounded-md p-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className=" font-semibold">Message</label>
              <textarea
                type="text"
                name="message"
                spellCheck="false"
                className=" outline outline-2 h-44 rounded-md p-1 resize-none overflow-hidden"
              />
            </div>
            <button
              onClick={notify}
              type="submit"
              className=" flex justify-center items-center"
              value="Send"
            >
              <Buttons />
              <Toaster/>
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-12 ">
          <div className=" md:flex flex-col gap-2 hidden">
            <p className=" font-semibold text-xl">
              Reach out now and let's make it happen! 
            
            </p>
            <p className="text-xl">
              Contact LoopiEmail for services that take your success to the next level.
            </p>
            <p className=" text-xl">See you!</p>
          </div>

          <div className=" text-xl tracking-wider ">
            <p className=" mb-4">Get in touch with LoopiEmail!</p>
            <p className="flex items-center gap-5">
              <AiOutlineMail /> kpriyesh.designs@gmail.com
            </p>
            <p className="flex items-center gap-5">
              <AiOutlineInstagram />
              loopie.mail
            </p>
            <p className="flex items-center gap-5">
              <BsWhatsapp /> +91 8305401380
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
