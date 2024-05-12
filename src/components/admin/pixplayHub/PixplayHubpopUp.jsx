import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { PiBookBookmarkFill } from "react-icons/pi";
import { MdOutlineConnectedTv } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";
import { FaListUl ,FaFolder } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";


const PixplayHubpopUp = ({ visible, onClose }) => {
    
    const toggleModal = (e) => {
        if (e.target.id === 'PixplayHubpopUp') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="PixplayHubpopUp"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-[700px] lg:h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full overflow-y-scroll lg:overflow-y-auto support_modal">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-row items-center '>
                         <PiBookBookmarkFill color='#1199EE' size={45}/>
                        <div className='ms-2'>
                            <h1 className='text-base font-bold md:text-2xl lg:text-3xl'>Pixplay Hub</h1>
                            <p className="text-[10px] md:text-sm text-gray-500">Learn & Get the best out of Pixplay</p>
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
                                <h1 className='text-base font-bold md:text-xl '>Studio Tour</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Setup your first monitor.</p>
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
                                <h1 className='text-base font-bold md:text-xl '>Media Tour</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Add Your First Media Assets</p>
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
                                <h1 className='text-base font-bold md:text-xl '>Playlist Tour</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Create your first playlist</p>
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
                                <h1 className='text-base font-bold md:text-xl '>Screen Tour</h1>
                                <p className="text-[10px] md:text-sm text-gray-500">Create your first screen</p>
                            </div>
                        </div>
                        
                        <button className='bg-[#EBEBEB]  text-white font-medium px-9 py-2 rounded'>
                            Start
                        </button>
                    </div>
                    
                    <div className='flex flex-row flex-wrap py-6'>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 lg:mt-0'>Learn Trrough Videos</button>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 lg:mt-0'>Live Customer Support</button>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 lg:mt-0'>Schedule A Demo</button>
                        <button className='bg-black text-white font-medim px-4 py-2 rounded mx-2 mt-4 lg:mt-0'>Get A Training</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PixplayHubpopUp;
