import React from "react";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <h1>
        <span className="text-3xl text-blue-600 font-extrabold">Image</span>
        <span className="text-2xl"> 🤖</span>
      </h1>
      <p className="border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @mukul.gmail | All rights reserved.
      </p>
      <div className="flex gap-2.5">
        <a href="#" className="p-5 border text-blue-600 border-blue-700 rounded-full">
          <FaLinkedinIn size={20} />
        </a>
        <a href="#" className="p-5 border rounded-full">
          <FaGithub size={20} />
        </a>
        <a href="#" className="p-5 border text-green-600 rounded-full">
          <FaGlobe size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
