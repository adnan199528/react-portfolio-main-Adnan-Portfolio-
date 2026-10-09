import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {/* Image clickable — opens project link if provided */}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={src}
              alt={title}
            />
          </a>
        ) : (
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300"
            src={src}
            alt={title}
          />
        )}
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <h3 className="text-lg uppercase text-designColor font-semibold">
            {title}
          </h3>
          <p className="text-sm tracking-wide mt-3 text-gray-400 group-hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>

        {/* Arrow Button */}
        {link && (
          <div className="flex justify-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-designColor hover:text-gray-100 duration-300 flex items-center gap-2"
              aria-label={`View ${title} project`}
            >
              <span>View Project</span>
              <FaArrowRight className="text-sm mt-[2px]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
