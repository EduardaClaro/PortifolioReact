"use client";

import { NavLinks } from "@/constant/constant";
import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";

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
        navBg ? "bg-[#01042d] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode size={20} color="black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            Portifólio
          </h1>
        </div>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              <p>{link.Label}</p>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Button */}
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload size={20} />
            <span>Download CV</span>
          </button>

          {/* Burger Menu */}
          <div onClick={openNav} className="cursor-pointer lg:hidden">
            <HiBars3BottomRight size={25} color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
