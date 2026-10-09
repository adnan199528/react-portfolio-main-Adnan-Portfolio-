import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import me from "../../assets/images/me.jpg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#212428] to-[#141518] p-4 lgl:p-8 rounded-lg shadow-2xl flex flex-col gap-6 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={me}
        alt="me"
      />

      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-white">Adnan Syed</h3>
        <p className="text-lg font-normal text-indigo-400">
          Full/Mern Stack Developer
        </p>

        <p className="text-base text-gray-400 tracking-wide">
          I am a dedicated Full/Mern Stack developer with 2 years of experience,
          proficient in web development and UI/UX design. I combine robust
          backend solutions with dynamic frontend designs to create innovative
          digital experiences.
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2 mt-2">
          Email: <span className="text-white">Syedorten95@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-base uppercase font-titleFont text-gray-400 mb-2">
          Find me in
        </h2>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/adnan-syed-18989b321"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-black/40 hover:bg-indigo-600/50 transition-colors"
          >
            <FaLinkedinIn className="text-white text-sm" />
          </a>
          <a
            href="https://www.facebook.com/billy.tio.94"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-black/40 hover:bg-indigo-600/50 transition-colors"
          >
            <FaFacebook className="text-white text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;