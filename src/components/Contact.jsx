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
      className=" md:pl-64 mt-8 grid md:flex flex-col justify-center items-center gap-9 mb-12"
    >
      <p className=" text-center text-5xl font-semibold">Contact Us</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 ">
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-6 w-80 bg-[#FDE047] p-4 rounded-md"
          >
            <div className="flex flex-col gap-1">
              <label className=" font-semibold">Your Name</label>
              <input
                type="text"
                name="user_name"
                className=" outline outline-2 rounded-md p-1"
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
          <div className=" md:flex flex-col gap-6 hidden">
            <p className=" font-semibold text-xl">
              Tell us how we can help you.
            </p>
            <p>
              if you like to work with us then drop us a message using the
              contact form.
            </p>
            <p>or get in touch using email, instagram or whatsapp number.</p>
            <p>See you!</p>
          </div>

          <div className=" text-xl tracking-wider ">
            <p className="flex items-center gap-5">
              <AiOutlineMail /> circuitminds@company.com
            </p>
            <p className="flex items-center gap-5">
              <AiOutlineInstagram />
              circuit.minds
            </p>
            <p className="flex items-center gap-5">
              <BsWhatsapp /> +078 9123 45434
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
