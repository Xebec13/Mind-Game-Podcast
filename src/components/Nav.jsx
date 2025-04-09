import React from "react";
import logo from "../assets/chatlogopng.png";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NavItems = [
  { text: "Home", href: "#" },
  { text: "Episodes", href: "#" },
  { text: "Contact", href: "#" },
];

const Nav = () => {
  return (
    <nav className=" bg-(--space-cadet) grid grid-cols-3 gap-1 justify-between items-center">
      <ul className="nav-item flex justify-start items-center flex-wrap w-full h-full">
        {NavItems.map(({ text, href }, index) => (
          <li key={index}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center flex-col w-full h-full">
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </div>
        <h1 className="nav-logo">Mind the Game</h1>
      </div>
      <div className="nav-item flex justify-end items-center w-full h-full">
        <FaInstagramSquare aria-label="Instagram" />
        <FaXTwitter aria-label="X" />
        <FaYoutube aria-label="YouTube" />
      </div>
    </nav>
  );
};

export default Nav;
