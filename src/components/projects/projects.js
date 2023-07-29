import React from "react";
import ProjectCard from "./projectCard";
import Title from "../layouts/title";
import {ecommerce, greenSock, noteTaker, employeeTracker, network, pulse, cloudbudget, solar_system, chatbot, user_card, password_generator, quiz, weather_app} from "../../assets/index";

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
						title="Run project"
						des="Online store of running accessories"
						src={pulse}
						githubLink ="https://github.com/DariaBatiuk/Run-project"
						websiteLink = "https://dariabatiuk.github.io/Run-project/"
						/>
        <ProjectCard 
						title="GPT Chatbot"
						des="AI Chatbot with usage of GPT API"
						src={chatbot}
						githubLink ="https://github.com/DariaBatiuk/Chat-bot"
						websiteLink = "https://dariabatiuk.github.io/Chat-bot/"
						/>
        <ProjectCard 
						title="GreenSock Animation"
						des="This e-commerce application was created to establish a back-end system for an e-commerce website."
						src={greenSock}
						githubLink ="https://github.com/DariaBatiuk/GreenSock-animation-project"
						websiteLink = "https://dariabatiuk.github.io/GreenSock-animation-project/"
						/>
						   <ProjectCard 
						title="Landing Page for business"
						des="Landing page for business company"
						src={cloudbudget}
						githubLink ="https://github.com/DariaBatiuk/Page-CloudBudget"
						websiteLink = "https://dariabatiuk.github.io/Page-CloudBudget/"
						/>
        <ProjectCard 
						title="Note Taker"
						des="This application allows users to create, save, and remove notes. It represents my initial attempt at writing back-end code using Express framework and utilizes a JSON file to store note data."
						src={noteTaker}
						githubLink ="https://github.com/DariaBatiuk/Note-Taker-Express.js"
						websiteLink = "https://note-taker-app2.herokuapp.com/"
						/>
				  <ProjectCard 
						title="Solar System"
						des="Mini version of the Solar system made by usage of Three.js"
						src={solar_system}
						githubLink ="https://github.com/DariaBatiuk/Solar-system"
						websiteLink = "https://dariabatiuk.github.io/Solar-system/"
						/>
							<ProjectCard 
						title="Password Generator"
						des="Javascript online password generator"
						src={password_generator}
						githubLink ="https://github.com/DariaBatiuk/Password-Generator-on-JS"
						websiteLink = "https://dariabatiuk.github.io/Password-Generator-on-JS/"
						/>
							<ProjectCard 
						title="Coding Quiz"
						des="Javascript Coding Quiz with online timer"
						src={quiz}
						githubLink ="https://github.com/DariaBatiuk/Coding-Quiz-on-JS-"
						websiteLink = "https://dariabatiuk.github.io/Coding-Quiz-on-JS-/"
						/>
							<ProjectCard 
						title="Weather App"
						des="5-Days Weather App"
						src={weather_app}
						githubLink ="https://github.com/DariaBatiuk/My-5-days-Weather-App"
						websiteLink = "https://dariabatiuk.github.io/My-5-days-Weather-App/"
						/>
        <ProjectCard 
						title="Employee tracker"
						des="The following is a CLI (command-line interface) application that enables the user to handle employee-related data within a company. The program connects to a MySQL database containing three tables,  namely, departments, roles, and employees. "
						src={employeeTracker}
						githubLink ="https://github.com/DariaBatiuk/Employee-tracker"
						websiteLink = "https://drive.google.com/file/d/1ncKn1mOp3QClJXK_ZR8ODngA1cxizt8M/view"
						/>
        <ProjectCard 
						title="User Card"
						des="User Card for a social networ"
						src={user_card}
						githubLink = "https://github.com/DariaBatiuk/User-card"
						websiteLink = "https://dariabatiuk.github.io/User-card/"
						/>
      </div>
    </section>
  );
};

export default Project;
