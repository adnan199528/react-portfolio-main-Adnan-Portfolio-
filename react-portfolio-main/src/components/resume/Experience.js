// Experience.js
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      <ResumeCard
        title="Freelancer - Mern Stack Developer"
        subTitle="Fiverr (Remote)"
        result="01/2022 - 01/2024"
        des="Provided front-end and back-end development services as a freelancer on Fiverr. Delivered responsive, user-focused interfaces and collaborated with clients to meet project requirements."
      />
      {/* Add more experience items here if needed */}
    </div>
  );
};

export default Experience;