import { NavLinks } from '@/constant/constant';
import React from 'react';
import Link from "next/link";
import { CgClose } from 'react-icons/cg';

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
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-slate-900 
        opacity-70 w-full h-screen`}
        onClick={closeNav}
      />

      {/* navLinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-slate-800 space-y-6 z-[100050] right-0 ${
        showNav ? "translate-x-0" : "translate-x-full"
      }`}

      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white hover:text-cyan-300 w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-cyan-300 sm:text-[30px]">
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
        >
          <CgClose size={28} color="white" />
        </button>

      </div>
    </>
  );
};

export default MobileNav;
