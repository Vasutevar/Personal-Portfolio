import React from "react";
import "../index.css";
// import About from './About';
// import DevImg from "../assets/undraw_programming_re_kg9v.svg";
import Programmer from "../assets/thoughtworks-gif_dribbble.gif";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-full bg-[#010101] flex flex-row">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-screen">
        <h1 className="text-2xl sm:text-6xl font-bold text-[#ccd6f6]">
          Hello!!
        </h1>
        <h1 className="text-2xl sm:text-5xl font-bold text-[#ccd6f6]">
          I'm <span className="text-[#41d9df]">Vasu Tevar.</span>
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#ccd6f6]">
          A <span className="text-[#349a9d]">Evolving Software Developer.</span>
        </h2>
        <p className="text-[#8892b0] py-1 max-w-[700px] ">
          I'm an evolving Software Developer [Front-End] specializing in building
          excellent digital applications. Currently, I'm focused on building
          responsive full-stack web applications to enhance my skills in world of Softwares.
        </p>
       
        <p className="text-[#8892b0]">Always Learning...👨‍💻 </p>

        <a href="/work">
          <button className="text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-[#05EFF7] hover:shadow-lg hover:shadow-cyan-300/80 rounded-full hover:text-[#010101]  hover:border-[#05EFF7]">
            View Projects
            <span>
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </a>
        
        
       
      </div>
      
      

      <div className="mx-10 my-50 px-auto py-20">
          <img style={{width:"400px", height:"400px"}}src={Programmer} alt="homescreen" />
        </div> 
    </div>
   
  );
};

export default Home;

//className="group-hover:rotate-90 duaration-300"
