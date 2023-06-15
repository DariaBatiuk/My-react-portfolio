import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Cards = ({ title, des, icon }) => {
  return (
    <div className="w-full p-6 sm:px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 py-6 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10  translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className=" text-xl sm:text-5xl text-designColor">{icon} </span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xs sm:text-xs sml:text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base hidden sml:block">{des}</p>
            <span className="text-xl sm:text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
