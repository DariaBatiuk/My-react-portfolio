import React, { useEffect, useState } from "react";
import Title from "../layouts/title";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import ResumeCard from "./resumeCard";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3">
          <li onClick={() => 
						setEducationData(true) &
						setSkillsData(false) &
						setExperienceData(false)
						} className="resumeLi">
            Education
          </li>
          <li
            onClick={() => 
							setEducationData(false) & 
							setSkillsData(true) &
							setExperienceData(false)
						}
            className="resumeLi"
          >
            Professional Skills
          </li>
          <li 
					onClick={() => 
						setEducationData(false) &
						setSkillsData(false) &
						setExperienceData(true)
						} 
					className="resumeLi">Experience</li>
        </ul>
      </div>
      {educationData && <Education />}
			{skillsData && <Skills />}
			{experienceData && <Experience />}
      <Education />
    </section>
  );
};

export default Resume;
