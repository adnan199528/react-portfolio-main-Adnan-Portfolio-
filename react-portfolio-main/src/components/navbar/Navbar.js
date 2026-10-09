import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa"; 
import { navLinksdata } from '../../constants'; 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/adnan-syed-18989b321";
  const facebookUrl = "https://www.facebook.com/billy.tio.94";

  // Navbar Logo Text
  const NavbarLogoText = () => (
    <h1 className="text-xl font-bold tracking-tight text-white flex flex-col">
      <span className="text-sm font-light text-gray-400">MERN Stack Developer</span>  
      <span className="text-2xl font-extrabold text-indigo-400 leading-none">Adnan Syed</span>
    </h1>
  );

  // Custom scroll + URL update
  const handleNavClick = (link, hash) => {
    window.history.pushState(null, "", hash);

    const customOffsets = {
      features: -120,
      projects: -120,
      contact: -120,
      testimonials: -120,
      resume: -120,
    };

    scroller.scrollTo(link, {
      duration: 1200,
      smooth: "easeInOutQuart",
      offset: customOffsets[link] ?? -120,
    });
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-gray-900 bg-opacity-95 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-800 px-4">
      {/* Logo */}
      <div>
        <NavbarLogoText />
      </div>

      {/* Desktop Nav */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link, hash }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-indigo-400 duration-300"
              onClick={() => handleNavClick(link, hash)}
            >
              {title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-400 cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="flex flex-col"> 
                <NavbarLogoText /> 
                <p className="text-sm text-gray-400 mt-4">
                  I am a <strong>Full/Mern Stack Developer</strong> passionate about building scalable and user-centric applications. Let’s connect to create innovative digital experiences.
                </p>
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map(({ _id, title, link, hash }) => (
                  <li
                    key={_id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-indigo-400 duration-300"
                    onClick={() => {
                      handleNavClick(link, hash);
                      setShowMenu(false);
                    }}
                  >
                    {title}
                  </li>
                ))}
              </ul>

              {/* ✅ Social Links Section */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont text-gray-400 mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaLinkedinIn />
                  </a>

                  {/* ✅ Facebook */}
                  <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaFacebook />
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-indigo-400 duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
