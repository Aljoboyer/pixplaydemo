import React, { useState } from 'react'
import TeamInviteModal from './SettingsModals/TeamInviteModal';
import ListTable from '../../common/ListTable/ListTable';
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from 'react-icons/io';
import DropDownMenu from '../../common/DropDownManu/DropDownManu';
import ConfirmationModal from '../../common/Modals/ConfirmationModal';

const UserInfo = () => {
    return <div className='w-fit flex flex-row justify-center items-center py-2'>
            <div className='w-[50px] h-[50px] rounded-full bg-blue-800 flex flex-row justify-center items-center'><p className='text-white font-bold text-xl md:text-2xl'>J</p></div>
            <div className='ms-2 w-[300px] md:w-fit'>
                <p className='text-base md:text-lg font-medium '>Jhon Day</p>
                <p className='text-sm md:text-base text-gray-400'>Jhon@gmail.com</p>
            </div>
    </div>
}
const Teams = () => {
    const [showInvitationModal, setShowInvitationModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const toggleInviteModal = () => {
        setShowInvitationModal(!showInvitationModal);
      };

    const toggleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const handleDropDownClick = (action) => {
        if(action == 'delete'){
            toggleDeleteModal()
        }
    }

  return (
   <div   className='flex flex-row justify-evenly w-full '>
    
        <div className='w-full bg-[#EBEEF0] p-4 rounded-md'>
            <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col justify-between items-center'>
                <div className=''>
                    <p className='text-xl font-bold md:text-3xl'>People</p>
                    <p className='mt-2 text-[12px] md:text-base'>Invite and manage members, and edit which groups they have access to.</p>
                </div>

                <div>
                    <button onClick={toggleInviteModal} className='px-4 py-4 bg-[#015FDF] text-white font-bold rounded-md text-sm md:text-base w-full mt-4 md:mt-0'>Invite People</button>
                </div>
            </div>

          <div className='w-full overflow-y-visible overflow-x-auto lg:overflow-visible mt-4 bg-white p-4'>
            <table className="w-full  table-auto overflow-visible mx-auto">
                <thead className="">
                    <tr className="bg-table-header">
                    <th className="text-left">NAME</th>
                    <th className="text-center px-6">GROUPS</th>
                    <th className="text-center px-6">STATUS</th>
                    <th className=""></th>
                </tr>
                </thead>

                <tbody>
                   {
                    [1]?.map((item) => (
                      <tr className=''>
                      <td className=' py-2'>
                      <UserInfo/>
                      </td>
                      <td className='px-6 text-center py-2'>
                          Admin
                      </td>
                      <td className='px-6 text-center py-2'>
                          Pending
                      </td>
                      <td className='w-[300px] text-center py-2'>
                      <DropDownMenu handleDropDownClick={handleDropDownClick}/>
                      </td>
                  </tr>
                    ))
                   }
                </tbody>
            </table>
            </div>
        </div>
        {showInvitationModal && (
            <TeamInviteModal
              onClose={toggleInviteModal}
              visible={showInvitationModal}

            />
          )}

          {
            showDeleteModal && (
                <ConfirmationModal
                onClose={toggleDeleteModal}
                visible={showDeleteModal}
                />
            )
          }
   </div>
  )
}

export default Teams;
