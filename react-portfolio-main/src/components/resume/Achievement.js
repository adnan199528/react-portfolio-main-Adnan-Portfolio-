// Achievement.js
import React from "react";

const Achievement = () => {
  const achievements = [
    "2 Year experience working as a freelancer (Fiverr), (UpWork), (LinkedIn).",
    "Completed multiple client projects focused on front-end and Back-end and UI/UX, Mern Stack.",
    "Strong teamwork and time management skills and creative.",
  ];

  return (
    <div className="w-full mt-6">
      <ul className="list-disc list-inside space-y-2 text-gray-200">
        {achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievement;