import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { GrAndroid } from "react-icons/gr";
import { GoPlusCircle } from "react-icons/go";
import { CiPlay1 } from "react-icons/ci";

const CreateGroupModal = ({ visible, onClose}) => {

    const toggleModal = (e) => {
        if (e.target.id === 'CreateGroupModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="CreateGroupModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4 "
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-2/3 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <h1 className='text-base font-bold md:text-2xl'>Create Group</h1>
                    
                    <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();}}
                    className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>
               
            
               <div className='mt-2'>
                    <p className='text-xl font-bold  mt-4'>Group Name</p>
                   <div className='w-1/2 mt-2'>
                        <input  className='outline-none border border-1 border-gray-400 rounded-md px-2 h-[40px] md:w-2/3 w-full' placeholder='Enter group name' />
                   </div>
               </div>

                <div className='mt-7'>
                    <p className='font-bold text-xl'>Add Screens</p>

                    <p className='font-bold text-lg mt-4'>Filter</p>

                    <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col w-full justify-start mt-2'>
                        <div>
                            <p>Orientation</p>
                            <select  className='border border-1 border-gray-600 p-2 rounded-md mt-2'>
                                <option value="All">All</option>
                                <option value="Landscape">Landscape</option>
                                <option value="Potrait">Potrait</option>
                            </select>
                        </div>

                        <div className='mx-0 md:mx-7'>
                            <p>Os Type</p>
                            <select  className='border border-1 border-gray-600 p-2 rounded-md mt-2'>
                                <option value="All">All</option>
                                <option value="Andriod">Andriod</option>
                                <option value="chrometv">Tv Chrome Stick</option>
                            </select>
                        </div>

                        <div>
                            <p>Filters</p>
                            <select  className='border border-1 border-gray-600 p-2 rounded-md mt-2'>
                                <option value="All">All</option>
                                <option value="Landscape">Landscape</option>
                                <option value="Potrait">Potrait</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex justify-start'>
                        <input type="checkbox"/>
                        <p className='ms-2'>Select All</p>
                    </div>

                    <div className='mt-2 w-full overflow-y-visible overflow-x-auto  bg-white rounded'>
                        <table className="w-full  table-auto overflow-visible mx-auto bg-gray-50 mt-4">
                            <thead className=" bg-gray-100 ">
                                <tr className="bg-table-header">
                                    <th className="lg:px-0 lg:ps-2 text-start  py-2 font-medium text-[12px]"></th>
                                    <th className="px-6 lg:px-0 lg:ps-2 text-start  py-2 font-medium text-[12px]">Device</th>
                                    <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Name</th>
                                    <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Playlist</th>
                                    <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                [1,2,3]?.map((item) => (
                                <tr className=' cursor-pointer '>
                                    <td className='ps-2  py-2'>
                                        <input type="checkbox"/>
                                    </td>
                                    <td className='ps-2  py-2 md:w-[100px]'>
                                    <GrAndroid size={24} color='#a9c147' />
                                    </td>
                                    <td className=' text-start py-2 font-medium md:w-[280px]'>
                                        <p className='font-bold'>Reception Main</p>
                                    </td>
                                    <td className=' text-start py-2 font-medium flex items-center md:w-[300px]'>
                                        {
                                            item == 1 ? <><GoPlusCircle size={20} className='text-blue-600' />
                                        <span className='underline ms-2 text-blue-600'>Add Playlist</span></> : <><CiPlay1/>
                                        <span className='underline ms-2'>Birthday Whishes</span></>
                                        }
                                    </td>
                                
                                    <td className='lg:px-0 text-start py-4 '>
                                        <span className='bg-green-500 p-2 rounded-full font-medium text-white text-[12px]'>Online</span>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                     </div>

                    <div className='flex justify-center py-4'>
                    <button className='w-[250px] h-[50px] text-center bg-blue-500 text-white rounded-md font-medium text-[16px]'>Submit</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupModal;
