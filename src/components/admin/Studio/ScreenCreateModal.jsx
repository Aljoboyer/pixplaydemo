import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const ScreenCreateModal = ({ visible, onClose}) => {

    const toggleModal = (e) => {
        if (e.target.id === 'ScreenCreateModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="ScreenCreateModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <h1 className='text-base font-bold md:text-2xl'>Create Screen</h1>
                    
                    <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();}}
                    className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>
               
               <p className='text-lg font-medium  mt-2'>Screen Name</p>
               
               <div className='w-full xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col  items-center mt-2'>
                   <div className='w-1/2'>
                        <input  className='outline-none border border-1 border-gray-400 rounded-md px-2 h-[40px] md:w-2/3 w-full' placeholder='Enter screen name' />
                   </div>
                   <div className='flex justify-center items-center ms-4 w-1/2'>
                        <input className='outline-none border border-1 border-gray-400 rounded-md px-2 h-[40px] md:w-2/3 w-full' placeholder='Enter tag' />
                        <button className='px-4 py-2 rounded-md text-white bg-blue-400'>Create Tag</button>
                   </div>
               </div>
                
               <div className='mt-2'>
                <p className='font-medium text-gray-500'>Screen Tag</p>
                    <div className='w-full xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col  items-center mt-2'>
                        {
                            [1,2,3,4]?.map((item) => (
                                <p className='bg-black font-medium px-2 py-[2px] text-white ms-2 text-[13px]  rounded-full'>Tage Name</p>
                            ))
                        }
                    </div>
               </div>

                <div className='mt-4'>
                    <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col w-full'>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenCreateModal;
