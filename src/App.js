import React from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Features from "./components/features/features";
import Project from "./components/projects/projects";
import Resume from "./components/resume/resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
        <Navbar />
				<Banner/>
				<Features/>
				<Project />
				<Resume />
      </div>
    </div>
  );
}

export default App;
