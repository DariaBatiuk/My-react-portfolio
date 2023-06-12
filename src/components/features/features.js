import React from "react";
import { FaMobile  } from "react-icons/fa";
import { SiAntdesign, SiProgress } from "react-icons/si";
import Title from "../layouts/title";
import Card from "./card";



const Features = () => {
  return (
    <section id="features" className="w-full py-20  border-b-1 border-black">
      <Title  title="Features" des="What I Do" />
			<div className="grid grid-cols-1 md:grod-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
				<Card title="Web and Mobile App Development" des="Build a custom web site or any other web or mobile application" icon={<FaMobile />}/>
				<Card title="Software development" des="User-fiendly web site or application for your business" icon={<SiProgress />}/>
				<Card title="UI/UX Design" des="Create a user-friendly interfaces that enable users to understand how to use complex technical products" icon={<SiAntdesign />}/>
		{/* w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 */}
			</div>
    </section>
  );
};

export default Features;

