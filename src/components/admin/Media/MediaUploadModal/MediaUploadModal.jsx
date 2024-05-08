import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import MediaUpload from '../../../common/ImageUpload/MediaUpload';
import { IoMdLink } from "react-icons/io";

const MediaUploadModal = ({ visible, onClose }) => {
    const [currentTab, setCurrentTab] = useState('')

    useEffect(() => {
        setCurrentTab('Image')
    },[])
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
                <div className='w-full  bg-white  py-4  border border-b-2 border-gray-200'>
                    <div className="overflow-x-auto whitespace-no-wrap lg:overflow-x-none">
                        <div className="inline-flex  mx-2">

                        <div className="mx-4">
                            <button
                            onClick={() => setCurrentTab('Image')}
                            className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Image' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Image</button>
                        </div>

                        <div className="">
                            <button
                            onClick={() => setCurrentTab('Video')}
                            className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Video' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Video</button>
                        </div>

                        <div className="mx-4">
                            <button
                            onClick={() => setCurrentTab('Link')}
                            className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Link' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Link</button>
                        </div>

                        <div className="">
                            <button
                            onClick={() => setCurrentTab('Documents')}
                            className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Documents' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Documents</button>
                        </div>
                        </div>
                    </div>
                </div>
               
               {
                currentTab !== 'Link' &&
                <div>
                    <MediaUpload/>
               </div>
               }
                
               {
                currentTab == 'Link' && 
                <div className='h-[240px] flex flex-row justify-center items-center bg-gray-100'>
                    <div className=' flex flex-row justify-center items-center'>
                        <input className='border border-2 border-gray-300 outline-none h-[55px] px-2 w-full md:w-[400px]' type="text" placeholder='Enter a URL' />
                        <button className='bg-[#1199EE] px-4 h-[55px] rounded'><IoMdLink color='white' size={30} /></button>
                    </div>
                </div>
               }

               <div className='flex flex-row justify-end items-center  pb-4 mt-2'>
                    
                 <button onClick={onClose} className={`flex flex-row items-center border border-1 border-gray-300 rounded-md text-xl font-medium px-4 py-2 mt-2 bg-[#1199EE] text-white`}>
                    View Selected
                </button>
               </div>

            </div>
        </div>
    );
};

export default MediaUploadModal;
