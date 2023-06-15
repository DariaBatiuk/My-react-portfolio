import React from "react";
import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Experience = () => {
  return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
			   <div className="py-12 font-titleFont ">
      </div>
      <div className="w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Front End Developer, Freelance"
          subtitle="Moncton, NB. January 2022 – Present."
          des="Developing and maintaining user-friendly, responsive, and cross-browser compatible websites and web applications using HTML, CSS, and JavaScript. 
					Collaborating with designers, developers, and other team members to ensure that website designs and functionality meet project requirements and user needs.
					Testing and debugging website and application code to identify and fix errors and ensure optimal performance.
					"
        />
        <ResumeCard
          title="QA Tester, BMM Testlabs"
          subtitle="Moncton, NB. April 2022 – November 2022"
          des="Ensured the quality of clients' mobile applications by performing functionality, usability, and regression testing.
					Tested configuration and compatibility of software on multiple hardware platforms, utilizing strong analytical skills to identify and resolve compatibility issues.
					Contributed to the development and follow-up of test plans and materials, demonstrating exceptional attention to detail and organization skills.
					Tracked, analyzed, recorded, and verified all software functionality discrepancies and development corrections.
					"
        />
          <ResumeCard
          title="Other work experience"
          subtitle="Customer Success Specialist, June 2016 – March 2021  "
          des="Tranio, Bryansk, Russia."
        />
      </div>
		</motion.div>
  
  );
};

export default Experience;