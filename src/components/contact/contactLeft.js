import React from "react";
import contactImg from "../../assets/images/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactLeft = () => {
  return (
		<div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8  rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center  ">
		<img src={contactImg} className="w-full h-64 object-cover rounded-lg mb-2" alt="contactImg"
		/>
		<div className="flex flex-col gap-4">
			<h3 className="text-3xl font-bold text-white">Daria Batiuk</h3>
			<p className="text-lg font-normal text-gray-400"> 
			Full Satck Developer</p>
			<p className="text-base text-gray-400 tracking-wide">
				Some information 
			</p>
			<p className="text-base text-gray-400 flex items-center gap-2">
				Phone: <span className="text-lighText"> +1 506 898 31 55</span>
			</p>
			<p className="text-base text-gray-400 flex items-center gap-2">
				Email:{" "} <span className="text-lighText"> dariabatiuk5@gmail.com</span>
			</p>
		</div>
		<div className="flex flex-col gap-4">
			<h2 className="text-base uppercase font-tutleFont mb-4 "> FIND ME </h2>
			<div className="flex gap-4">
				<span className="bannerIcon">
					<FaLinkedinIn />
				</span>
				<span className="bannerIcon">
					<FaGithub />
				</span>
			</div>
		</div>
	</div>

  );
};

export default ContactLeft;
