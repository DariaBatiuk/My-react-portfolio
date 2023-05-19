import React from "react";
import Title from "../layouts/title";
 import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import ResumeCard from "./resumeCard";



const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
        </ul>
      </div>

      <Education />
    </section>
  );
};

export default Resume;
