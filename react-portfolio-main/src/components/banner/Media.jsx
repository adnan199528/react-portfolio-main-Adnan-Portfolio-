import React from 'react';
// Imports of media icons
import { FaLinkedinIn, FaFacebook, FaHtml5, FaCss3Alt } from "react-icons/fa"; 
import { 
  SiFigma, 
  SiJavascript, 
  SiMongodb, 
  SiNodedotjs, 
  SiReact, 
  SiFlutter, 
  SiFirebase, 
  SiCsharp 
} from "react-icons/si";

const Media = () => {
  // ✅ Separate social link objects
  const socialLinks = [
    { 
      icon: <FaLinkedinIn />,  
      url: "https://www.linkedin.com/in/adnan-syed-18989b321"
    },
    { 
      icon: <FaFacebook />,  
      url: "https://www.facebook.com/billy.tio.94"
    },
  ];

  // ✅ Top Technical Skills
  const topSkills = [
    <SiReact />,        
    <SiNodedotjs />,    
    <SiMongodb />,      
    <FaHtml5 />,        
    <FaCss3Alt />,      
    <SiJavascript />,   
    <SiFigma />,        
    <SiFlutter />,      
    <SiFirebase />,     
    <SiCsharp />,       
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-16 lgl:gap-20 justify-start items-start">
      
      {/* 1. FIND ME IN - Left Side */}
      <div className="flex flex-col gap-4"> 
        <h2 className="text-base uppercase font-titleFont text-gray-400 tracking-wider">
          FIND ME IN
        </h2>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <span key={index} className="bannerIcon">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </span>
          ))}
        </div>
      </div>
      
      {/* Vertical Line */}
      <div className="hidden xl:block h-32 w-px bg-gray-600 my-auto"></div>
      
      {/* 2. BEST SKILL ON - Right Side */}
      <div className="flex flex-col gap-4"> 
        <h2 className="text-base uppercase font-titleFont text-gray-400 tracking-wider">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4 flex-wrap max-w-sm">
          {topSkills.map((icon, index) => (
            <span key={index} className="bannerIcon">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Media;
