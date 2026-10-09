import React from "react";
import Title from "../layouts/Title";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>

      {/* Testimonials abhi blank rakhe hain */}
      <div className="max-w-6xl mx-auto text-center mt-10">
        <p className="text-gray-400 italic">
          Testimonials will be added soon...
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
