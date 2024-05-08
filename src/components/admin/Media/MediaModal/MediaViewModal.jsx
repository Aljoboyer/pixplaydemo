import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { HiPencil } from "react-icons/hi2";
import { MdDone } from "react-icons/md";
import PlaceHolderImg from '../../../../assets/image/placeholder-image.webp';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";

const MediaViewModal = ({ visible, onClose, mediaDeleteHandler }) => {
    const [mediaNameEdit, setMediaNameEdit] = useState(false)

    
    const toggleModal = (e) => {
        if (e.target.id === 'MediaViewModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="MediaViewModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-row items-center '>
                        {
                            mediaNameEdit ? <input className='outline-none border-b-2 border-gray-300 px-2 py-2 text-base font-bold md:text-2xl' defaultValue="Example-Image" />  : <h1 className='text-base font-bold md:text-2xl'>Example-Image</h1>
                        }
                        <div onClick={() => setMediaNameEdit(!mediaNameEdit)} className='w-fit cursor-pointer px-2'>
                                {!mediaNameEdit ? <HiPencil size={20}/> :  <MdDone size={24}/> }
                        </div>
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
               
                <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col w-full'>
                    <div className='w-full lg:w-3/4 bg-gray-100 flex flex-row justify-center items-center'>
                        <img className='media_view_img' src={PlaceHolderImg} alt="" />
                    </div>
                    <div className='w-full lg:w-1/4 p-2 flex flex-col justify-between items-between'>
                        <div className='bg-gray-100 p-4'>
                            <p className='text-sm md:text-base'><span className='text-gray-500'>Format:</span> <span className='font-medium'> image/png</span></p>
                            <p className='text-sm md:text-base my-2'><span className='text-gray-500'>File size:</span>	<span className='font-medium'>9.11 KB</span></p>
                            <p className='text-sm md:text-base'><span className='text-gray-500'>Uploaded by:</span> <span className='font-medium'>Abdul_Al Joboyer-chy</span></p>
                            <p className='text-sm md:text-base my-2'><span className='text-gray-500'>Space:</span> <span className='font-medium'>Default</span></p>
                            <p className='text-sm md:text-base'><span className='text-gray-500'>Uploaded date:</span>	<span className='font-medium'>May 3rd, 2024 at 10:21 AM</span></p>
                        </div>
                        <div className='border-t-2 border-gray-300 p-2 flex flex-row items-center justify-start'>
                             <RiDeleteBin6Line onClick={mediaDeleteHandler} color='red' className='cursor-pointer' size={30}/>

                             <MdOutlineFileDownload  color='black' className='cursor-pointer ms-11' size={34}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MediaViewModal;
