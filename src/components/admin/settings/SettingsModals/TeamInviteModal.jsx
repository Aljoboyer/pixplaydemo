import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FiPlusCircle } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const TeamInviteModal = ({ visible, onClose }) => {
   
    const toggleModal = (e) => {
        if (e.target.id === 'TeamInviteModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="TeamInviteModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4"
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-1/2 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <h1 className='text-base font-bold md:text-2xl'>Invite People to PixPlay</h1>
                    
                    <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>

               <div className='mt-2 '>
                    <p className=''>Invite people by email</p>
                    <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col justify-between items-center mt-2'>
                        <input className='border border-2 border-gray-300  rounded p-2 block w-full md:w-[300px]' type="text" placeholder='jhon@hdomain.com' />
                       
                       <div className='w-full md:w-[300px] my-4 md:my-0 mx-0 md:mx-2'>
                            <select className='border border-2 border-gray-300  rounded p-2 block w-full' value="Admin" disabled>
                                <option value="Admin">Admin</option>
                            </select>
                       </div>

                       <button className='flex flex-row items-center border border-1 border-gray-300 rounded-md text-xl font-medium px-4 py-2'>
                            <FiPlusCircle  size={25} color='black' />
                            <span className='ms-2'>Add</span>
                       </button>
                    </div>
               </div>

                 <div className=''>
                    <div className='text-center py-4 h-[300px] flex flex-row items-center justify-center'>
                        <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Let's Add People to your Organization</h1>
                        <p className='text-sm md:text-base mt-2'>Add Their email to get started.</p>
                        </div>
                    </div>
                 </div>

                 <div className='flex flex-row justify-end items-center border-t-2 border-gray-200 pb-4 mt-2'>
                    
                 <button className='flex flex-row items-center border border-1 border-gray-300 rounded-md text-xl font-medium px-4 py-2 mt-2 bg-gray-200'>
                    <MdMailOutline  size={25} color='black' />
                    <span className='ms-2'>Send Invite</span>
                </button>
               </div>
            </div>
        </div>
    );
};

export default TeamInviteModal;
