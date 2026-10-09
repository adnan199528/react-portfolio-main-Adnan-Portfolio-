import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media'; 

const LeftBanner = () => {
    // Hamza Iqbal ke CV se related roles aur skills
    const [text] = useTypewriter({
        words: [
            "a Full/Mern Stack Developer.", 
            "a Frontend Developer.", 
            "a UI/UX Designer.", 
            "a Freelance Coder." 
        ],
        loop: true,
        typeSpeed: 70, 
        deleteSpeed: 50,
        delaySpeed: 2000,
    });

    return (
        // Assuming your Hero section background is dark (e.g., black or dark gray)
        <div className="w-full lgl:w-3/5 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                {/* WELCOME TO MY DEVELOPER WORLD: Brighter Indigo */}
                <h4 className="text-xl text-indigo-400 mb-2 font-medium">WELCOME TO MY DEVELOPER WORLD</h4>
                
                {/* Hi, I'm Adnan Syed: White text for main heading */}
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white">
                    Hi, I'm{" Adnan Syed "}
                    {/* Adnan Syed Name: Contrast color (Indigo-400) */}
                    <span className="text-indigo-400 capitalize"> </span>
                </h1>
                
                {/* Typewriter Text: Lighter gray for visibility */}
                <h2 className="text-3xl font-semibold text-gray-300 h-10">
                    {text}
                    <Cursor
                        cursorBlinking={true} 
                        cursorStyle="|"
                        cursorColor="#4F46E5" // Indigo color
                    />
                </h2>
                
                {/* Paragraph Text: Light gray for good readability */}
                <p className="text-lg text-gray-400 leading-relaxed tracking-wide mt-4">
                    I am a **Full/Mern Stack developer** with **2 years of experience**, proficient in web
                    development and UI/UX design. I specialize in building scalable and user-centric
                    applications. My background as a freelancer on platforms like Fiver and Upwork and Linkedin
                    has honed my ability to blend **robust code** with **intuitive design**, ensuring high-quality
                    digital experiences.
                </p>
            </div>
            
            <Media />
        </div>
    );
}

export default LeftBanner;