import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import LogoImg from '../../../assets/image/placeholder-image.webp'

const AddPlaylistToScreenModal = ({ visible, onClose}) => {
    const [checked, setChecked] = useState(false)

    const toggleModal = (e) => {
        if (e.target.id === 'AddPlaylistToScreenModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="AddPlaylistToScreenModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4 "
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <h1 className='text-base font-bold md:text-2xl'>Add Playlist</h1>
                    
                    <div onClick={(e) => {
                        e.stopPropagation();
                        onClose();}} 
                        className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>
               
            
               <div className='mt-2'>
                    <p className='text-xl font-bold  mt-4'>Reception Main</p>
                   <div className='w-1/2 mt-2 flex items-center justify-start'>
                        <input  className='outline-none border border-1 border-gray-400 rounded-md px-2 h-[40px] md:w-2/3 w-full' placeholder='Search Playlist' />
                        <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-md'>Search</button>
                   </div>
               </div>
                
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 sm:grid-cols-2 mt-4 h-[500px] overflow-y-scroll w-full overflow-x-hidden support_modal'>
                    {
                        [1,2,3,4,5,6]?.map((item) => (
                            <div className='border border-2 border-gray-400 w-full h-[280px] rounded-md '>
                                <div className='flex justify-start items-center p-4'>
                                {
                                    checked ? <button onClick={() => setChecked(false)}><FaSquareCheck color='#1199EE' size={28}/></button>  : <button onClick={() => setChecked(true)}><FaRegSquareCheck size={28}/></button>
                                    
                                }
                                    <p className='text-lg md:text-xl font-bold ms-2'>Birthday Wishes</p>
                                </div>
                                
                                <div className='side_bar_style px-2 py-4 flex items-center justify-between'>
                                    <div className='flex justify-end items-center'>
                                        <CiPlay1 size={22} color='white' />
                                        <p className='ms-2 font-medium text-white'>3 Assets</p>
                                    </div>

                                    <div className='flex justify-end items-center'>
                                        <MdOutlineAccessTime size={22} color='white'/>
                                        <p className='ms-2 font-medium text-white'>12Min 15sec</p>
                                    </div>
                                </div>

                                <div className='flex flex-row items-center horizontalScroll mt-7 w-full'>
                                    {
                                        [1,2,3,]?.map((item) => (
                                            <div className='w-[80px] h-[80px] ms-2'>
                                                <img className='w-full h-full' src={LogoImg} alt="" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-center py-4'>
                    <button className='w-[250px] h-[50px] text-center bg-blue-500 text-white rounded-md font-medium text-[16px]'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddPlaylistToScreenModal;
