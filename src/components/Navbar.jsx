import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub , FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)          //if false -> true & viceversa


    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#010101] text-gray-300">
            <div>
                <img src={Logo} alt="logo" style={{ width: "50px" }} />
            </div>

            {/* menu */}
            {/* md = below 768px */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Education & Interest</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {/* if nav = false then ? : */}
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobilemenu */}
            {/* if nav = false then ? : */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#010101] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">Education & Interest</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>


            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/vasu-tevar/' target='_blank'  rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' target="_blank"
                            href='https://github.com/Vasutevar'  rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.instagram.com/_.imvasu._' target='_blank'  rel="noopener noreferrer">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>



    )
}

export default Navbar;