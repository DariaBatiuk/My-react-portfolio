import React from "react";
import Title from "../layouts/title";

const Resume = () => {
  return (
   <section
	 id="resume"
	 className="w-full py-20 border-b-[1px] border-b-black"
	 >
		<div className="flex justify-center items-center text-center">
        <Title des="My resume" />
      </div>
			<div>
				<ul >
					<li>Education</li>
					<li>Professional Skills</li>
					<li>Experience</li>
				</ul>
			</div>
	 </section>
  );
};

export default Resume;
