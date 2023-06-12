import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 lgl:grid-cols-2 gap-8" >
			<div className="w-full h-full flex flex-col gap-8">
			<div className="flex gap-4">
				<span className="bannerIcon">
					<FaLinkedinIn />
				</span>
				<span className="bannerIcon">
					<FaGithub />
				</span>
				<span className="bannerIcon">
					<SiIndeed />
				</span>
			</div>
			</div>
			<div className="w-full h-full flex flex-col">
				<h3 className="text-xl uppercase text-designColor tracking-wider">
					Quick Links
				</h3>
				<ul className="flex gap-20 font-titleFont font-medium overflow-hidden py-6">
					<a href="#home">
					<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">About 
						<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></span>
						</span>
						</li>
					</a>
					<a href="#projects">
					<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Portfolio <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></span></span>
						</li>
					</a>
				<a href="features">
				<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Services <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></span></span>
						</li>
				</a>
						<a href="contact">
						<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Contact <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></span></span>
						</li>
						</a>
				</ul>
			</div>
			
		</div>
  );
};

export default Footer;