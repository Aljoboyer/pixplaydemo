import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FiPlusCircle } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const TeamInviteModal = ({ visible, onClose }) => {
   const [invitationData, setInvitationData] = useState([])
   const [email, setEmail] = useState('');
   const [emailErr, setEmailErr] = useState('');

   const invitationAddHandler = () => {
        if(!email || !email.match(/\S+@\S+\.\S+/)){
            setEmailErr('Please input a valid email')
        }
        else{
            setInvitationData((prev) => [...prev, email])
            setEmail('')
        }
   }

   const peopleRemoveHandler = (item) => {
        const filterData = invitationData?.filter((filterItem) => filterItem !== item)
        setInvitationData(filterData)
   }
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
                          <input value={email} onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailErr('')
                          }} className='border border-2 border-gray-300  rounded p-2 block w-full md:w-[300px]' type="text" placeholder='jhon@hdomain.com' />
                       
                       <div className='w-full md:w-[300px] my-4 md:my-0 mx-0 md:mx-2'>
                            <select className='border border-2 border-gray-300  rounded p-2 block w-full' value="Admin" disabled>
                                <option value="Admin">Admin</option>
                            </select>
                       </div>

                       <button onClick={invitationAddHandler} className='flex flex-row items-center border border-1 border-gray-300 rounded-md text-xl font-medium px-4 py-2'>
                            <FiPlusCircle  size={25} color='black' />
                            <span className='ms-2'>Add</span>
                       </button>
                    </div>
                    {emailErr && <p className='text-sm font-medium text-red-500 mt-2'>{emailErr}</p>}
               </div>

                 <div className=''>
                    {
                        invitationData?.length > 0 ?
                        <div className={`max-h-screen overflow-x-auto mb-5 ${invitationData?.length > 8 && 'overflow-y-scroll h-[400px]'}`}>
                        <table className="w-full text-sm table-auto">
                            <thead className="">
                            <tr className="bg-table-header">
                            
                                <th className="px-2 py-4 text-left">Email</th>
                                <th className="px-2 text-left">Group</th>
                                <th className="px-2"></th>
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    invitationData?.map((item) => (
                                        <tr>
                                        <td className={`px-2 py-4 text-left`}>
                                                {item}
                                        </td>
                                        <td className={`px-2 text-left`}>
                                            <select className='border border-2 border-gray-300  rounded p-2 block w-full' value="Admin" disabled>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </td>
                                        <td className={`px-2`}>
                                            <button onClick={() => peopleRemoveHandler(item)} className='border border-1 border-gray-200 rounded-md font-bold py-2 px-4 mt-2 bg-gray-100 text-xl'>X</button>
                                        </td>
                                     </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
                        :
                        <div className='text-center py-4 h-[300px] flex flex-row items-center justify-center'>
                            <div>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Let's Add People to your Organization</h1>
                            <p className='text-sm md:text-base mt-2'>Add Their email to get started.</p>
                            </div>
                        </div>
                    }
                 </div>

                 <div className='flex flex-row justify-end items-center border-t-2 border-gray-200 pb-4 mt-2'>
                    
                 <button className={`flex flex-row items-center border border-1 border-gray-300 rounded-md text-xl font-medium px-4 py-2 mt-2 ${invitationData?.length > 0 ? 'bg-[#1199EE] text-white' : 'bg-gray-200'}`}>
                    <MdMailOutline  size={25} color={`${invitationData?.length > 0 ? 'white' : 'black'}`} />
                    <span className='ms-2'>Send Invite</span>
                </button>
               </div>
            </div>
        </div>
    );
};

export default TeamInviteModal;
