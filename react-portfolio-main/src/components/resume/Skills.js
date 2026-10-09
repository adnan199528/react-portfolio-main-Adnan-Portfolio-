// Skills.js
import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MERN Stack",
    "ASP.NET",
    "SQL Server",
    "MongoDB",
    "Google Firebase",
    "Figma",
    "Express.js",
    "Flutter",
  ];

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="px-4 py-3 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg shadow-shadowOne"
          >
            <p className="text-sm md:text-base text-gray-200">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;