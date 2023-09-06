import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
// import Nextjs from '../assets/nextjs.png';



const Skills = () => {
    return (
        <div name='skills' className='w-full h-[100%] bg-[#010101] text-gray-300  overflow-hidden md:h-max-screen sm:h-screen'>
            {/* Container */}
            <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center' >
                <div>
                    <p className='text-4xl font-bold inline border-b-4  border-[#05EFF6] '>Skills</p><br /><br />
                    <p className="py-2 text-lg">⚡Building responsive website's front-end using ReactJS and NextJS.</p>
                    <p className="py-2 text-lg">⚡Developing highly interactive Front-end / User Interfaces for your web applications.</p>
                    <p className="py-2  text-lg">⚡Experience of developing back-end with Express and managing Database[MongoDB].</p>
                    <p className="py-2 text-lg">➡️ These are the technologies that I've worked with :-</p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>

                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='hover:shadow-md hover:shadow-[#5c5e5d] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;




