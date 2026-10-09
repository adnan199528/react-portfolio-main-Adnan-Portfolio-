// Education.js
import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      <ResumeCard
        title="Software Engineer"
        subTitle="Aptech Computer Learning — Karachi, Pakistan"
        result="11/2022 - 03/2026"
        des="Enrolled in Software Engineering program focusing on web development, programming fundamentals and software practices."
      />
    </div>
  );
};

export default Education;