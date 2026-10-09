import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  useEffect(() => {
    // Page refresh pe top se start
    window.scrollTo(0, 0);

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 5500, // pehle ka smooth scroll duration
          smooth: "easeInOutQuart",
          offset: -120,   // pehle ka offset
        });
      }, 1200); // pehle ka delay
    }
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar /> {/* Pehle jaisa hi */}
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
