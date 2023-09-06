import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import {FiSun } from 'react-icons/fi';
// import {MdDarkMode} from 'react-icons/md'
// import { Link } from 'react-scroll';
// import useLocalStorage from 'use-local-storage';

import '../index.css'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)          //if false -> true & viceversa

    // const toggleTheme = () => {
    //     alert("Hi");
    // }



    return (
        <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#010101] text-gray-300">
            <div>
                <a href='/'>
                    <img src={Logo} alt="logo" style={{ width: "50px" }} />
                </a>
            </div>

            {/* menu */}
            {/* md = below 768px */}
            <ul className="  hidden md:flex">
                <li>
                    <button className="text-lg font-semibold hover:bg-[#05EFF7] hover:shadow-lg hover:shadow-cyan-300/60 px-2 rounded-full hover:text-[#010101]">
                        <a href='/' >Home</a>
                    </button>
                </li>
                <li>
                    <button className="text-lg font-semibold hover:bg-[#05EFF7] hover:shadow-lg hover:shadow-cyan-300/60 px-2 rounded-full hover:text-[#010101]">
                        <a href='/about' >Education and Interest</a>
                    </button>

                </li>
                <li>
                    <button className="text-lg font-semibold hover:bg-[#05EFF7] hover:shadow-lg hover:shadow-cyan-300/60 px-2 rounded-full hover:text-[#010101]">
                        <a href='/skills' >Skills</a>
                    </button>
                </li>
                <li>
                    <button className="text-lg font-semibold hover:bg-[#05EFF7] hover:shadow-lg hover:shadow-cyan-300/60 px-2 rounded-full hover:text-[#010101]">
                        <a href='/work' >Work</a>
                    </button>
                </li>
                <li>
                    <button className="text-lg font-semibold hover:bg-[#05EFF7] hover:shadow-lg hover:shadow-cyan-300/60 px-2 rounded-full hover:text-[#010101]">
                        <a href='/contact' >Contact</a>
                    </button>
                </li>
                {/* <li>
                    <button className="flex flex-column rounded-full p-1 bg-black">
                        <FiSun /> 
                    </button>
                </li> */}
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {/* if nav = false then ? : */}
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobilemenu */}
            {/* if nav = false then ? : */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#010101] flex flex-col justify-center items-center'}>
                <button className="py-6 text-4xl">
                    <a href="/">Home</a></button>
                <button className="py-6 text-4xl">
                    <a href="/about">Education & Interest</a></button>
                <button className="py-6 text-4xl">
                    <a href='/skills'>Skills</a></button>
                <button className="py-6 text-4xl">
                    <a href='/work'>Work</a> </button>
                <button className="py-6 text-4xl">
                    <a href='contact'>Contact</a></button>
            </ul>


            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/vasu-tevar/' target='_blank' rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' target="_blank"
                            href='https://github.com/Vasutevar' rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:tevarvasu.dev@gmail.com' target='_blank' rel='noopener noreferrer'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.instagram.com/_.imvasu._' target='_blank' rel="noopener noreferrer">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://drive.google.com/drive/folders/173PH-opX8MmmOfkrgx1q2482WD9-NdQE'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>



    )
}

export default Navbar;