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
						/>
        <ProjectCard 
						title="GreenSock Animation"
						des="This e-commerce application was created to establish a back-end system for an e-commerce website."
						src={greenSock}/>
        <ProjectCard 
						title="Note Taker"
						des="This application allows users to create, save, and remove notes. It represents my initial attempt at writing back-end code using Express framework and utilizes a JSON file to store note data."
						src={noteTaker}/>
        <ProjectCard 
						title="Employee tracker"
						des="The following is a CLI (command-line interface) application that enables the user to handle employee-related data within a company. The program connects to a MySQL database containing three tables,  namely, departments, roles, and employees. "
						src={employeeTracker}/>
        <ProjectCard 
						title="Social Network"
						des="The database in question utilizes MongoDB and provides API endpoints for efficient interaction with the database. Specifically tailored for a social networking platform, this database includes endpoints for managing Users, their associated thoughts, and the reactions of their friends towards those thoughts."
						src={network}/>
      </div>
    </section>
  );
};

export default Project;
