import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { PiBookBookmarkFill } from "react-icons/pi";
import { MdOutlineConnectedTv } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";
import { FaListUl ,FaFolder } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";


const SupportPopUp = ({ visible, onClose }) => {
    
    const toggleModal = (e) => {
        if (e.target.id === 'SupportPopUp') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="SupportPopUp"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-[700px] lg:h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full overflow-y-scroll lg:overflow-y-auto support_modal">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-row items-center '>
                         <PiBookBookmarkFill color='#1199EE' size={45}/>
                        <div className='ms-2'>
                            <h1 className='text-base font-bold md:text-2xl lg:text-3xl'>Support</h1>
                            <p className="text-[10px] md:text-sm text-gray-500">We are here to help you !</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center'>
                        <select className='bg-gray-200 px-4 py-2 rounded me-4 font-medium text-base md:text-xl' name="" id="">
                            <option value="">Resource</option>
                            <option value="">Support</option>
                            <option  value="">Support</option>
                        </select>
                        <div 
                            onClick={(e) => {
                            e.stopPropagation();
                            onClose();}}
                            className='cursor-pointer'>
                            <MdOutlineCancel size={30} color='black' />
                        </div>
                    </div>
               </div>
               
               <div className='mt-2'>
                     <h1 className='text-base font-bold md:text-2xl lg:text-3xl'>Take Tour</h1>
               </div>
                
                <div>
                    <div className='bg-[#F6F8FB] rounded mt-4 p-4 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center '>
                            <MdOutlineConnectedTv color='#999999' size={35} />
                            <div className='ms-2'>
                                <h1 className='text-base font-bold md:text-xl '>Chat With Us</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">We are not bots !</p>
                            </div>
                        </div>
                        
                        <button className='bg-[#309DFC] text-white font-medium px-9 py-2 rounded'>
                            Start
                        </button>
                    </div>

                    <div className='bg-[#F6F8FB] rounded mt-4 p-4 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center '>
                            <AiFillFolder color='#999999' size={35} />
                            <div className='ms-2'>
                                <h1 className='text-base font-bold md:text-xl '>Follow Us</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Know more about us <br className='block md:hidden' /> on social and blogs</p>
                            </div>
                        </div>
                        
                        <button className='bg-[#EBEBEB] text-white font-medium px-9 py-2 rounded'>
                            Start
                        </button>
                    </div>

                    <div className='bg-[#F6F8FB] rounded mt-4 p-4 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center '>
                            <FaListUl color='#999999' size={26}/>
                            <div className='ms-2'>
                                <h1 className='text-base font-bold md:text-xl '>Our Contacts</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Email , Call or Whatsapp Us</p>
                            </div>
                        </div>
                        
                        <button className='bg-[#EBEBEB]  text-white font-medium px-9 py-2 rounded'>
                            Start
                        </button>
                    </div>

                    <div className='bg-[#F6F8FB] rounded mt-4 p-4 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center '>
                            <RiComputerFill color='#999999' size={35}/>
                            <div className='ms-2'>
                                <h1 className='text-base font-bold md:text-xl '>Give Feedback</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Help us to improve !</p>
                            </div>
                        </div>
                        
                        <button className='bg-[#EBEBEB]  text-white font-medium px-9 py-2 rounded'>
                            Start
                        </button>
                    </div>

                    <div className='bg-[#F6F8FB] rounded mt-4 p-4 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center '>
                            <RiComputerFill color='#999999' size={35}/>
                            <div className='ms-2'>
                                <h1 className='text-base font-bold md:text-xl '>Refer Us</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Help us grow!</p>
                            </div>
                        </div>
                        
                        <button className='bg-[#EBEBEB]  text-white font-medium px-9 py-2 rounded'>
                            Start
                        </button>
                    </div>
                    
                    <div className='flex flex-row flex-wrap py-6'>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 md:mt-0'>About Us</button>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 md:mt-0'>Public Relations</button>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 md:mt-0'>Customer Stories</button>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 md:mt-0'>Work With Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPopUp;
