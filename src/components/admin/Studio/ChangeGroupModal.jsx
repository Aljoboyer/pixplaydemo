import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const ChangeGroupModal = ({ visible, onClose}) => {

    const toggleModal = (e) => {
        if (e.target.id === 'ChangeGroupModal') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="ChangeGroupModal"
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center text-left w-full h-full outline-none overflow-auto z-10 px-4 "
        >
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-1/3 w-full ">
                    <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                        <p className='font-bold text-xl md:text-2xl'>Group List</p>
                        <div 
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();}}
                        className='cursor-pointer'>
                            <MdOutlineCancel size={30} color='black' />
                        </div>
                        
                    </div>
                    <div className='mt-4'>
                    <div className='mt-2 w-full overflow-y-visible overflow-x-auto  bg-white rounded'>
                        <table className="w-full  table-auto overflow-visible mx-auto bg-gray-50 mt-4">
                            <thead className=" bg-gray-100 ">
                                <tr className="bg-table-header">
                                    <th className="lg:px-0 lg:ps-2 text-start  py-2 font-medium text-[12px]"></th>
                                    <th className="px-6 lg:px-0 lg:ps-2 text-start  py-2 font-medium text-[12px]">Group Name</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                [1,2,3]?.map((item) => (
                                <tr className=' cursor-pointer '>
                                    <td className='ps-2  py-2'>
                                        <input type="checkbox"/>
                                    </td>
                                    <td className=' text-start py-2 font-medium '>
                                        <p className='font-bold'>Group A</p>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                     </div>

                    <div className='flex justify-center py-4'>
                    <button className='w-[250px] h-[50px] text-center bg-blue-500 text-white rounded-md font-medium text-[16px]'>Add</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeGroupModal;
