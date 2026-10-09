import React from 'react';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    // Quick Links data
    const quickLinks = [
        { name: 'About Me', href: '#home' }, 
        { name: 'Features', href: '#features' },
        { name: 'Resume', href: '#resume' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    // Text Logo Component
    const FooterLogoText = () => (
        <h1 className="text-xl font-bold tracking-tight text-white flex flex-col">
            <span className="text-sm font-light text-gray-400">MERN Stack Developer</span>
            <span className="text-2xl font-extrabold text-indigo-400 leading-none">Adnan Syed</span>
        </h1>
    );

    return (
       <div className="w-full py-20 h-auto bg-gray-900 text-white border-b-[1px] border-b-gray-800 
    grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">

    {/* 1. Logo, Name & Text Column */}
    <div className="w-full h-full flex flex-col gap-8">
        <FooterLogoText />
        <p className="text-base text-gray-300">
            I am a passionate Full/MERN Stack Developer with 2 years of experience 
            building dynamic, responsive, and user-friendly web applications.
        </p>
        <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/adnan-syed-18989b321" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/billy.tio.94" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaFacebook />
            </a>
        </div>
    </div>

    {/* Vertical Line Separator */}
    <div className="hidden md:block h-full w-px bg-gray-700 mx-auto"></div>

    {/* 2. Quick Links Column */}
    <div className="w-full h-full">
        <h3 className="text-xl uppercase text-indigo-400 tracking-wider">
            Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden text-gray-300">
            {quickLinks.map((link) => (
                <li key={link.name}>
                    <a href={link.href} className="w-full text-lg relative hover:text-indigo-400 duration-300 group cursor-pointer">
                        {link.name}
                        <span className="w-full h-[1px] bg-indigo-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
</div>
    );
}

export default Footer;
