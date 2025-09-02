import { NavLinks } from '@/constant/constant';
import React from 'react';
import Link from "next/link";
import { CgClose } from 'react-icons/cg';

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-500 z-[100002] bg-slate-950 ${
          showNav ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      />

      {/* navLinks */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full transform transition-transform duration-500 w-[80%] sm:w-[60%] bg-slate-800 space-x-6 z-[100050] right-0 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.Label}
            </p>
          </Link>
        ))}

        {/* Cross Icon */}
        <CgClose>
          onClick={closeNav}
        </CgClose>

      </div>
    </>
  );
};

export default MobileNav;
