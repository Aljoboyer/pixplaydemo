import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { CiPlay1 } from "react-icons/ci";

const PlaylistPreviewModal = ({ visible, onClose }) => {
    
    const toggleModal = (e) => {
        if (e.target.id === 'PlaylistPreviewModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="PlaylistPreviewModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-row items-center '>
                        <FaRegArrowAltCircleLeft size={28} />
                       <p className='text-xl  font-bold md:text-3xl ms-2'>
                        Preview</p>
                    </div>
                    
                    <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>
               
                <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col w-full justify-between items-center p-4'>
                    <div className='w-1/6 flex flex-row justify-start items-center'>
                        <PiTelevisionSimpleBold size={24}/>
                        <p className='text-lg font-medium ms-2'>Enlarge</p>
                    </div>

                    <div className='w-2/6 flex flex-row justify-center items-center'>
                        <select className='border border-1 border-gray-600 p-2 rounded-md'>
                            <option value="Landscape">Landscape</option>
                            <option value="Potrait">Potrait</option>
                        </select>

                        <select className='border border-1 border-gray-600 p-2 rounded-md ms-4'>
                            <option value="Landscape">Full HD 1920*1080</option>
                        </select>
                    </div>

                    <div className='w-2/6'>
                        <div className=' flex flex-row justify-start items-center side_bar_style p-2'>
                            <CiPlay1 color='white' size={24}/>
                            <p className='text-lg font-bold text-white'>Playing</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlaylistPreviewModal;
