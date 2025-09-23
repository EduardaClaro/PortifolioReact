import React from "react";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <div className="bg-[#2b0936] p-5">
      <h1 className={`text-lg text-white/70 text-center ${robotoCondensed.className}`}>
        Portifólio Maria Eduarda Claro
      </h1>
    </div>
  )
}

export default Footer