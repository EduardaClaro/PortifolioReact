import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  description: string;
  className?: string;
};

const ServicesCard = ({ icon, name, description, className }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-start text-center bg-transparent border-2 
      border-purple-500 rounded-2xl shadow-lg hover:border-purple-400 hover:shadow-purple-500/30 hover:scale-105 
      transition-all duration-300 ease-in-out p-6 ${className || ""}`}
    >
      <div className="h-[150px] flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110">
        <Image
          src={icon}
          alt={name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <h1 className="text-white text-xl mt-4 transition-all duration-300 ease-in-out hover:text-purple-400 hover:scale-105">
        {name}
      </h1>
      <p className="text-white mt-2 transition-all duration-300 ease-in-out hover:text-purple-300">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
