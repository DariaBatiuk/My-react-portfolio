import React from "react";
import { newFavicon } from "../../assets";


const RightBanner = () => {
  return (
		<div className="relative w-1/2 items-start">
		<img
			className="relative z-10 w-full h-[680px]"
			src={newFavicon}
			alt="favicon"
			style={{ objectFit: "cover" }}
		/>
		<div
			className="absolute inset-0 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne"
			style={{ width: "100%", height: "85%" }}
		></div>
	</div>
  );
};

export default RightBanner;
