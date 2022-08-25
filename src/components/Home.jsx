import React from 'react';
import '../index.css';
// import About from './About';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#010101]">

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Hello!!</h1>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">I'm <span className="text-[#41d9df]">Vasu Tevar.</span></h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">A <span className="text-[#349a9d]" >Software Developer.</span></h2>
                <p className="text-[#8892b0] py-2 max-w-[700px] ">I'm a Software Developer specializing in building excellent digital applications.
                    Currently, I'm focused on learning to build responsive full-stack web applications.</p>
                <p className="text-[#8892b0]">Always Learning...👨‍💻 </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-[#05EFF7] hover:text-black hover:border-[#05EFF7]">View Projects
                        <span className="group-hover:rotate-90 duaration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="justify-center items-center">
                <button className="arrow">
                    <span></span>
                    <span></span>
                    
                </button>
            </div>

        </div>
    )
}

export default Home;