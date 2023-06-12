import React, { useEffect, useState } from "react";
import Title from "../layouts/title";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";


const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li onClick={() => 
						setEducationData(true) &
						setSkillsData(false) &
						setExperienceData(false)
						} 
						
						className={`${educationData ? "border-designColor rounded-lg" : "border-transparent" } resumeLi`}>

            Education
          </li>
          <li
            onClick={() => 
							setEducationData(false) & 
							setSkillsData(true) &
							setExperienceData(false)
						}
            className={`${skillsData ? "border-designColor rounded-lg" : "border-transparent" } resumeLi`}
          >
            Professional Skills
          </li>
          <li 
					onClick={() => 
						setEducationData(false) &
						setSkillsData(false) &
						setExperienceData(true)
						} 
						className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent" } resumeLi`}
					>
						
						Experience</li>
        </ul>
      </div>
      {educationData && <Education />}
			{skillsData && <Skills />}
			{experienceData && <Experience />}
      {/* <Education /> */}
    </section>
  );
};

export default Resume;
