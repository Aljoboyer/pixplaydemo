import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const MediaUploadModal = ({ visible, onClose }) => {
  
    const toggleModal = (e) => {
        if (e.target.id === 'MediaUploadModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="MediaUploadModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-1/2 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <h1 className='text-base font-bold md:text-2xl'>Media Upload</h1>
                    
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

export default MediaUploadModal;
