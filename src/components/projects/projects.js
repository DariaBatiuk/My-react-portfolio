import React from "react";
import ProjectCard from "./projectCard";
import Title from "../layouts/title";
import {ecommerce, greenSock, noteTaker, employeeTracker, network} from "../../assets/index";

const Project = () => {
  return (
    <section
      id="projects"
      className="=w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Visit my portfolio" des="My projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap:6vxl:gap-10">
        
        <ProjectCard 
						title="E-commerce Back-End Project"
						des="This project shows the use of GreenSock Animation (GSAP) library for creating smooth and performant animations on the web."
						src={ecommerce}
						githubLink ="https://github.com/DariaBatiuk/E-commerce-Back-End"
						websiteLink = "https://drive.google.com/file/d/18YBc6ql7MjbI-fXwJlFOmJsPOEU3x5Rv/view"
						/>
        <ProjectCard 
						title="GreenSock Animation"
						des="This e-commerce application was created to establish a back-end system for an e-commerce website."
						src={greenSock}
						githubLink ="https://github.com/DariaBatiuk/GreenSock-animation-project"
						websiteLink = "https://dariabatiuk.github.io/GreenSock-animation-project/"
						/>
        <ProjectCard 
						title="Note Taker"
						des="This application allows users to create, save, and remove notes. It represents my initial attempt at writing back-end code using Express framework and utilizes a JSON file to store note data."
						src={noteTaker}
						githubLink ="https://github.com/DariaBatiuk/Note-Taker-Express.js"
						websiteLink = "https://note-taker-app2.herokuapp.com/"
						/>
        <ProjectCard 
						title="Employee tracker"
						des="The following is a CLI (command-line interface) application that enables the user to handle employee-related data within a company. The program connects to a MySQL database containing three tables,  namely, departments, roles, and employees. "
						src={employeeTracker}
						githubLink ="https://github.com/DariaBatiuk/Employee-tracker"
						websiteLink = "https://drive.google.com/file/d/1ncKn1mOp3QClJXK_ZR8ODngA1cxizt8M/view"
						/>
        <ProjectCard 
						title="Social Network"
						des="The database in question utilizes MongoDB and provides API endpoints for efficient interaction with the database. Specifically tailored for a social networking platform, this database includes endpoints for managing Users, their associated thoughts, and the reactions of their friends towards those thoughts."
						src={network}
						githubLink = "https://github.com/DariaBatiuk/Social_Network_Mongo.db"
						websiteLink = "https://drive.google.com/file/d/1XLIsNkpwAGfp3ptqNlzhneIPo0sxJKx9/view"
						/>
      </div>
    </section>
  );
};

export default Project;
