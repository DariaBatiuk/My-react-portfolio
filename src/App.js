import React from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Features from "./components/features/features";
import Project from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
			<div className="max-w-screen-xl mx-auto px-16">
        
				<Banner/>
				<Features/>
				<Project />
				<Resume />
				<Contact />
      </div>
    </div>
  );
}

export default App;
