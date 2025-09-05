import { NavLinks } from "@/constant/constant";
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { Roboto_Condensed } from "next/font/google";

// Fonte Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-purple-950 
        opacity-70 w-full h-screen`}
        onClick={closeNav}
      />

      {/* navLinks */}
      <div
        className={`${robotoCondensed.className} text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#1e0e2b] space-y-6 z-[100050] right-0 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p
              className="text-white hover:text-purple-400 w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-purple-300 
              sm:text-[30px] transition-all duration-300 ease-in-out hover:scale-110"
            >
              {link.Label}
            </p>
          </Link>
        ))}

        {/* Cross Icon */}
        <button
          type="button"
          onClick={closeNav}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Fechar menu"
          className="transition-all duration-300 ease-in-out hover:scale-120"
        >
          <CgClose size={28} color="white" />
        </button>
      </div>
    </>
  );
};

export default MobileNav;
