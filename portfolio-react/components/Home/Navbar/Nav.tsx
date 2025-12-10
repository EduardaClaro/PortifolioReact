"use client";

import { NavLinks } from "@/constant/constant";
import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Roboto_Condensed } from "next/font/google";

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
    const handleScroll = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`h-[12vh] z-[10000] fixed w-full ${
        navBg ? "bg-[#2b0936]" : ""
      }`}
    >
      <div
        className={`${robotoCondensed.className} flex items-center h-full justify-between w-[90%] max-w-6xl mx-auto px-4`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode size={20} color="black" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-2xl text-white font-bold">
            Eduarda Claro
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-5">
          {NavLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.url)}
              className="text-lg md:text-xl hover:text-purple-500 text-white font-semibold"
            >
              {link.Label}
            </button>
          ))}
        </div>

        {/* Ações */}
        <div className="flex items-center space-x-4">
          <a
            href="/CurriculoEduarda.pdf"
            download="CurriculoEduarda.pdf"
            target="_blank"
            className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-lg cursor-pointer rounded-full bg-purple-900 hover:bg-purple-950 text-white flex items-center space-x-2"
          >
            <BiDownload size={20} />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu */}
          <div onClick={openNav} className="cursor-pointer lg:hidden">
            <HiBars3BottomRight size={38} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
