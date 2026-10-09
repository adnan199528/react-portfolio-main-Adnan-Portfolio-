import React from "react";
import ProjectsCard from "./ProjectsCard";

import fitnessTrackerImg from "../../assets/projects/fitness-tracker.png";
import ExpoTodoAppImg from "../../assets/projects/ExpoTodoAppImg.jpg"
import AdnanPortfolioMasterImg from "../../assets/projects/AdnanPortfolioMaster.jpg"
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-white">
          My <span className="text-designColor">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {/* 🟢 Existing Projects */}
        {}
        {}

        {/* 🟡 New Project: Fitness Tracker */}
        <ProjectsCard
  title="Fitness Tracker"
  des="A modern web app to track workouts, meals, and progress using MERN stack with secure login and activity charts."
  src={fitnessTrackerImg}
  link="https://fitnesstrack12.netlify.app/login"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {/* 🟢 Existing Projects */}
        {}
        {}

        {}
        <ProjectsCard
  title="ExpoTodoApp"
  des="This My React Native App."
  src={ExpoTodoAppImg}
  link="https://expotodoapp.netlify.app/"/>

<ProjectsCard
  title="AdnanPortfolioMaster"
  des="And Proffessional Portfolio."
  src={AdnanPortfolioMasterImg}
  link="https://adnanportfoliomaster.netlify.app/"/>
      </div>
    </section>
  );
};

export default Projects;
