import React from "react"; 
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      {/* importante: usar items-stretch para igualar altura dos cards */}
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"> 
        
        {/* Work Part */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-left">
            My Work <span className="text-purple-500">Experience</span>
          </h1>
          <div className="mt-10 w-full flex flex-col gap-6 h-full">
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"/>
            <ResumeCard Icon={FaReact} role="Front-End Developer"/>
            <ResumeCard Icon={BsDatabase} role="Backend Developer"/>
          </div>
        </div>

        {/* Education Part */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-left">
            My <span className="text-purple-500">Education</span>
          </h1>
          <div className="mt-10 w-full flex flex-col gap-6 h-full">
            <ResumeCard 
              Icon={BiBadge} 
              role="Design Institute of Technology" 
              date="Jan 2023 - Dec 2024"
            />
            <ResumeCard 
              Icon={FaReact} 
              role="Bachelo in Computer Science"
              date="Jan 2019 - Dec 2022"
            />
            <ResumeCard 
              Icon={BsDatabase} 
              role="Certificate in Digital Marketing"
              date="Jan 2016 - Dec 2020"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
