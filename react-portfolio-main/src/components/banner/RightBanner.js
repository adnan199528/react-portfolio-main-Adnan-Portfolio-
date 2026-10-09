import React from 'react';
import myPic from "../../assets/images/banner/mypic.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-2/5 flex justify-center items-center mt-10 md:mt-0">
      <img
        src={myPic}
        alt="Profile"
        className="rounded-xl object-cover w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto shadow-lg border-2 border-gray-700"
      />
    </div>
  );
};

export default RightBanner;
