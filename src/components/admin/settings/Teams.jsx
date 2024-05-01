import React, { useState } from 'react'
import TeamInviteModal from './SettingsModals/TeamInviteModal';
import ListTable from '../../common/ListTable/ListTable';
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from 'react-icons/io';
import DropDownMenu from '../../common/DropDownManu/DropDownManu';

const UserInfo = () => {
    return <div className='flex flex-row justify-center items-center py-2'>
            <div className='w-[50px] h-[50px] rounded-full bg-blue-800 flex flex-row justify-center items-center'><p className='text-white font-bold text-xl md:text-2xl'>J</p></div>
            <div className='ms-2'>
                <p className='text-base md:text-lg font-medium '>Jhon Day</p>
                <p className='text-sm md:text-base text-gray-400'>Jhon@gmail.com</p>
            </div>
    </div>
}
const Teams = () => {
    const [showInvitationModal, setShowInvitationModal] = useState(false);
    const tableData = [{email: 'ahan@gmail.com', }]
    const [dropDownShow, setDropDownShow] = useState(false);

    const toggleAnnouncementModal = () => {
        setShowInvitationModal(!showInvitationModal);
      };

    const handleDropDownClick = () => {

    }
  const columns = [
    {
      name: <p className='text-gray-400 font-bold text-base '>Name</p>,
      selector: (row) =>(
        <UserInfo/>
      ),
    //   sortable: true,
    },
    {
      name: <p className='text-gray-400 font-bold text-base '>Group</p>,
      selector: (row) => 'Admin',
    //   sortable: true,
    },
    {
      name: <p className='text-gray-400 font-bold text-base '>Status</p>,
      selector: (row) => 'Pending',
    //   sortable: true,
    },
    {
      name: '',
      selector: (row) => (
        <DropDownMenu handleDropDownClick={handleDropDownClick}/>
      ),
    //   sortable: false,
    width: '20%',
    },
  ];

const onPageChange = () => {

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
                    <button onClick={toggleAnnouncementModal} className='px-4 py-4 bg-[#015FDF] text-white font-bold rounded-md text-sm md:text-base w-full mt-4 md:mt-0'>Invite People</button>
                </div>
            </div>

             {/* <div className='mt-4 '>
                <ListTable
                    columns={columns}
                    data={tableData}
                    totalCount={tableData?.length}
                    handlePageChange={onPageChange}
                    // defaultPage={page}
                    />
             </div> */}
        </div>
        {showInvitationModal && (
            <TeamInviteModal
              onClose={toggleAnnouncementModal}
              visible={showInvitationModal}

            />
          )}
   </div>
  )
}

export default Teams;
