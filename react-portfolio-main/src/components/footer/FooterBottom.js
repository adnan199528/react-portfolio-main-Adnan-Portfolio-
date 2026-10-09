import React from 'react';

const FooterBottom = () => {
    
    // Text Logo Component
    const FooterLogoText = () => (
        <h1 className="text-lg font-bold tracking-tight text-white hidden md:flex flex-col">
            <span className="text-xs font-light text-gray-400">MERN Stack Developer</span>
            <span className="text-xl font-extrabold text-indigo-400 leading-none">Adnan Syed</span>
        </h1>
    );

    return (
        <div className="bg-gray-800 py-6 border-t border-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                
                {/* Left Side: Text Logo Added (for continuity) */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <FooterLogoText />
                </div>
                
                {/* Right Side: Copyright - Name is Hamza Iqbal */}
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()}. All rights reserved by <span className="text-white font-medium">Adnan Syed</span>.
                </p>
                
            </div>
        </div>
    );
};

export default FooterBottom;