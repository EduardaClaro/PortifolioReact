"use client";

import { NavLinks } from "@/constant/constant";
import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";

// Fonte Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#2b0936] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div
        className={`${robotoCondensed.className} flex items-center h-full justify-between w-[90%] mx-auto`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-110">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode size={20} color="black" />
          </div>
          <h1 className="text-2xl hidden sm:block md:text-2xl text-white font-bold">
            Eduarda Claro
          </h1>
        </div>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-2xl hover:text-purple-500 text-white font-semibold transition-all duration-300 ease-in-out hover:scale-110"
            >
              <p>{link.Label}</p>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Button */}
          <button className="px-6 py-2.5 text-lg cursor-pointer rounded-full bg-purple-900 hover:bg-purple-950 transition-all duration-300 ease-in-out text-white flex items-center space-x-2 hover:scale-105">
            <BiDownload size={22} />
            <span>Download CV</span>
          </button>

          {/* Burger Menu */}
          <div
            onClick={openNav}
            className="cursor-pointer lg:hidden transition-all duration-300 ease-in-out hover:scale-110"
          >
            <HiBars3BottomRight size={45} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
