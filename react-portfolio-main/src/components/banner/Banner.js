import React from "react";
import RightBanner from "./RightBanner";
import LeftBanner from "./LeftBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col md:flex-col lgl:flex-row items-center justify-between gap-10 lgl:gap-20 bg-gray-900 border-b border-b-gray-800 font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
