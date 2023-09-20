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
          title="Junior Front End Developer, HRUN"
          subtitle="Moncton, NB. January 2023 – Present."
          des =" Worked with new features, Google map API. 
					 Designed and developed landing pages and design for local business.
					 Tested and debugged applications to identify and fix errors and ensure optimal performance
					"
        />
        <ResumeCard
          title="QA Tester, BMM Testlabs"
          subtitle="Moncton, NB. April 2022 – November 2022"
          des=" Ensured the quality of clients' mobile applications by performing functionality, usability, and regression testing.
					 Tested configuration and compatibility of software on multiple hardware platforms, utilizing strong analytical skills to identify and resolve compatibility issues.
					 Contributed to the development and follow-up of test plans and materials, demonstrating exceptional attention to detail and organization skills.
					 Tracked, analyzed, recorded, and verified all software functionality discrepancies and development corrections.
					"
        />
          <ResumeCard
          title="Customer Success Specialist. Tranio "
          subtitle="Moscow, Russia. June 2016 – March 2021."
          des=" Initiated and organized a partnership in a new location, which lead to over 10% of overall gain.
					 Arranged 100+ residential property sales across Europe with local partners.
					 Initiated the series of international deals resulting 15% increase in sales with international clients.
					 Participated in several PR events, researched and delivered info for PR campaigns."
        />
      </div>
		</motion.div>
  
  );
};

export default Experience;