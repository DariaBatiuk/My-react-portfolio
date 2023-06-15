import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 mb-2 sml:mb-20 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-color duration-1000 ">
      <div className="w-full h-[100%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
				<div className="flex flex-col sml:flex-row items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
					<div className="flex gap-4 py-4 sml:py-0">
						<span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration cursor-pointer">
							<BsGithub />
						</span>
						<span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
							<FaGlobe />
						</span>
					</div>
        </div>
       <div>
				<p className="hidden sml:block text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{des}
				</p>
			 </div>
				</div>
      </div>
    </div>
  );
};

export default ProjectCard;
