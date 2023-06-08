import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8" >
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
				<ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
					<a href="#home">
					<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">About <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
					</a>
					<a href="#projects">
					<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Portfolio <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
					</a>
				<a href="features">
				<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Services <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
				</a>
						<a href="contact">
						<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Contact <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
						</a>
				</ul>
			</div>
			<div>
			<h3 className="text-xl uppercase text-designColor tracking-wider">
					Resources
				</h3>
				<ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
					<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">About <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
						<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Portfolio <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
						<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Services <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
						<li>
						<span className="w-full text-lg relative group hover:text-designColor duration-300 cursor-pointer">Contact <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span></span>
						</li>
				</ul>
			</div>
			<div></div>
		</div>
  );
};

export default Footer;