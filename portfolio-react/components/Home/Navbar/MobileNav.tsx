"use client";

import { NavLinks } from "@/constant/constant";
import React from "react";
import { CgClose } from "react-icons/cg";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeNav();
    }
  };

  return (
    <>
      {showNav && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100001]"
          onClick={closeNav}
        />
      )}

      <div
        className={`${robotoCondensed.className} text-white ${navOpen} fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#1e0e2b] space-y-6 z-[100050] right-0`}
      >
        {NavLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.url)}
            className="text-white hover:text-purple-400 w-fit text-lg sm:text-2xl md:text-[30px] ml-12 border-b pb-1 border-purple-300 text-left"
          >
            {link.Label}
          </button>
        ))}

        <button
          type="button"
          onClick={closeNav}
          aria-label="Fechar menu"
          className="absolute top-4 right-4 p-2"
        >
          <CgClose size={28} color="white" />
        </button>
      </div>
    </>
  );
};

export default MobileNav;
