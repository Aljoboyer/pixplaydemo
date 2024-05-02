import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FiPlusCircle } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const ConfirmationModal = ({ visible, onClose , onClickHandler}) => {
   
    const toggleModal = (e) => {
        if (e.target.id === 'ConfirmationModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="ConfirmationModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-auto p-6 bg-white rounded-lg xs:mx-3 md:w-1/2 w-full ">
               <div className='flex flex-row justify-end items-center border-b-2 border-gray-200 pb-4'>
                    <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>
                
                <div className='py-4'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Delete Jhon@gmail.com</h1>
                    <p className='mt-2'><span className='font-medium'>jhonday@gmail.com</span> will be deleted permanently and this action cannot be undone.</p>

                    <div className='flex flex-row justify-end items-center mt-2'>
                        <button onClick={() => onClose()} className='px-4 py-2 ms-2 font-medium border border-2 border-gray-300 rounded-md text-base md:text-lg'>Cancel</button>
                        <button onClick={() => onClose()} className='px-4 py-2 ms-2 font-medium border border-2 rounded-md bg-[#015FDF] text-white text-base md:text-lg'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
