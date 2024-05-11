import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

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
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-row items-center '>
                        <h1 className='text-base font-bold md:text-2xl lg:text-3xl'>Support</h1>
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
               
            </div>
        </div>
    );
};

export default SupportPopUp;
