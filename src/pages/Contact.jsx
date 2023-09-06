import React from 'react';
import {RiSendPlaneFill} from 'react-icons/ri'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#010101] flex justify-center items-center  p-4">
            <form action="https://getform.io/f/995ecf16-0ab2-44b2-9eeb-0ae24d3ee318" method="POST" className="flex flex-col max-w-[600px] w-full text-black-400 pt-4">
                <div className="pb-10 sm:pb-10">
                    <p className="text-4xl font-bold inline border-b-4 border-[#05EFF6] text-gray-300 ">Contact</p><br />
                    <p className="text-gray-300 p-4 pl-1">Submit the form below or contact me through an email - <span className="text-[#05EFF6]">tevarvasu.dev@gmail.com</span></p>
                </div>
                <input type="text" placeholder="Name" name="name" className=" p-2 bg-[#349a9d] border-[#349a9d]"></input>
                <input type="text" placeholder="Email" name="email" className="my-4 p-2 bg-[#349a9d]"></input>
                <textarea name="message" cols="30" rows="6" placeholder="Message" className=" p-2 bg-[#349a9d]"></textarea>
                <button type="submit" className="text-white border-2 hover:bg-[#05EFF6] hover:border-[#05EFF6] hover:text-black hover:shadow-lg hover:shadow-cyan-300/60  rounded-full  px-6 py-3 my-8 mx-auto flex items-center "> Send <RiSendPlaneFill size={20} className=""/></button>
            </form>

        </div>
    )
}

export default Contact;


//bg-[#349a9d]