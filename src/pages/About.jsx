import React from 'react';
import '../index.css'


const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#010101] text-gray-300 overflow-hidden' >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
                    <div className='sm:text-center pb-8 pl-4'>
                       
                        <p className='text-4xl font-bold inline border-b-4 border-[#05EFF7]'>
                        Education & Interests
                        </p>
                        
                        
                    </div>
                    

                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-justify justify-center text-3xl font-bold items-center  '>
                        <h3>Currently, I have completed my Diploma in Computer Engg. from The Maharaja SayajiRao University of Baroda.</h3><br />

                    </div>
                    <div className="text-justify text-xl font-normal">
                        <p>I am passionate about building (and occasionally designing) excellent Softwares and WebApp that improves
                            the lives of those around me. I am developing my professional scope in creating software
                            (especially web applications) .
                        </p>
                    </div>
                
                </div>

            </div>

        </div>

    )
}

export default About;





