
import React from "react";
import ResumeCard from "./resumeCard";

const Education = () => {
  return (
		<div>
			   <div className="py-12 font-titleFont ">
        <p className="text-sm text-designColor tracking-[4px]">some years</p>
        <h2 className="text-4xl font-bold">Education name smth</h2>
      </div>
      <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Certificate, Fullstack development"
          subtitle="University of New Brunswick (September 2022 - April 2023)"
          des="300+ hours of hands-on course material and completions. Mastered skills in full-stack web development (front end: JavaScript, React; back-end: Node.js, Express.js; database: SQL, MongoDB)."
        />
        <ResumeCard
          title="Master's degree, Finance and credit"
          subtitle="Financial University of the Russian Federation (October 2008 - June 2014)"
          des="Comprehensive six-year program covering financial management, credit analysis, investment strategies, and risk management. Developed expertise in financial modeling, data analysis, and strategic financial decision-making. Well-prepared to excel in roles involving financial analysis, investment management, and credit risk assessment."
        />
        <ResumeCard
    title="Udemy courses"
    subtitle={[
        "WEB developer bootcamp",
        "The Complete 2022 Software Testing Bootcamp",
				"API Testing Foundations"
    ].map((subtitle, index) => (
        <div key={index}>{subtitle}</div>
    ))}
/>
      </div>
		</div>
  
  );
};

export default Education;