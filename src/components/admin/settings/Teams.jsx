import React, { useState } from 'react'
import TeamInviteModal from './SettingsModals/TeamInviteModal';

const Teams = () => {
    const [showInvitationModal, setShowInvitationModal] = useState(false);

    const toggleAnnouncementModal = () => {
        setShowInvitationModal(!showInvitationModal);
      };

  return (
   <div   className='flex flex-row justify-evenly w-full'>
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
