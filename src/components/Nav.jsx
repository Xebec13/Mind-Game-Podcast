import { React, useState } from "react";
import logo from "../assets/chatlogopng.png";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const NavItems = [
  { text: "Home", href: "#home" },
  { text: "Episodes", href: "#episode" },
  { text: "Contact", href: "#footer" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <nav id="nav" className="bg-(--space-cadet)">
      
      {/* SCREEN SM */}
      <div className=" relative flex justify-between items-center w-full text-(--vanilla) text-4xl md:hidden">
        <a href="#nav" className="w-1/6">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
        <IoMenu onClick={toggleMenu} />
        <div
          className={`bg-(--space-cadet) absolute top-full left-0 w-full rounded-b-3xl rounded-t-none z-20 md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center p-2 space-y-5 text-2xl">
            {NavItems.map(({ text, href }, index) => (
              <li key={index}>
                <a href={href} onClick={closeMenu}>
                  {text}
                </a>
              </li>
            ))}
            <li className="text-red-600" onClick={closeMenu}>
              Close
            </li>
          </ul>
        </div>
      </div>

      {/* SCREEN MD */}
      <div className=" md:flex justify-center items-center text-(--vanilla) hidden">
        <ul className="md:flex justify-start items-center w-1/3 space-x-3 ">
          {NavItems.map(({ text, href }, index) => (
            <li key={index} className="text-xl">
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
        <div className="md:flex flex-col justify-center items-center w-1/3">
          <a href="#nav" className="w-1/2">
            <img
              className="w-full h-full object-cover"
              src={logo}
              alt="logo"
              loading="lazy"
            />
          </a>
          <h1>Mind the Game</h1>
        </div>
        <div className="md:flex justify-end items-center w-1/3 space-x-5 text-xl">
          <FaInstagramSquare aria-label="Instagram" />
          <FaXTwitter aria-label="X" />
          <FaYoutube aria-label="YouTube" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
