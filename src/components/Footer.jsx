import React from "react";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col justify-center items-center bg-(--space-cadet) text-(--vanilla) p-3">
      <div className="p-5 space-x-5 text-(--vanilla)">
        <a href="#episode" className="underline">Episodes</a>
      </div>
      <div className="flex p-5 space-x-10 text-3xl ">
        <FaInstagramSquare aria-label="Instagram" className="bg-amber-200 rounded-2xl text-blue-950 p-1" />
        <FaXTwitter aria-label="X" className="bg-amber-200 rounded-2xl text-blue-950 p-1" />
        <FaYoutube aria-label="YouTube" className="bg-amber-200 rounded-2xl text-blue-950 p-1" />
      </div>
    </footer>
  );
};

export default Footer;
