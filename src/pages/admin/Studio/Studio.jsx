import React, { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import BottomTab from '../../../components/common/BottomTab/BottomTab';
import PlylistTable from '../../../components/admin/Studio/PlylistTable';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal';
import PlaylistSearchHeader from '../../../components/admin/Studio/PlaylistSearchHeader';
import ScreenSearchHeader from '../../../components/admin/Studio/ScreenSearchHeader';
import SreenLists from '../../../components/admin/Studio/SreenLists';
import ScreenCreateModal from '../../../components/admin/Studio/ScreenCreateModal';
import CreateGroupModal from '../../../components/admin/Studio/CreateGroupModal';
import AddScreenToGroupModal from '../../../components/admin/Studio/AddScreenToGroupModal';
import ChangeGroupModal from '../../../components/admin/Studio/ChangeGroupModal';

const Studio = () => {
  const navigate = useNavigate()
  const tabData = ['Playlist', 'Screen', 'Channel',]
  const [currentTab, setCurrentTab] = useState('')
  const [playlistDeleteModalShow, setPlaylistDeleteModalShow] = useState(false)
  const [createScreenModal, setCreateScreenModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const [addScreenModal, setAddScreenModal] = useState(false);
  const [changeGroupModal, setChangeGroupModal] = useState(false);

  useEffect(() => {
    setCurrentTab('Playlist')
  },[])

  const currentTabHandler = (tabName) => {
    setCurrentTab(tabName)
  }

  const toggleDeleteModal = () => {
    setPlaylistDeleteModalShow(!playlistDeleteModalShow)
  }

  const playlistDeleteHandler = () => {
    toggleDeleteModal()
  }

  const toggleCreateScreenModal = () => {
    setCreateScreenModal(!createScreenModal)
  }

  const toggleCreateGroupModal = () => {
    setCreateGroupModal(!createGroupModal)
  }

  const toggleAddScreenModal = () => {
    setAddScreenModal(!addScreenModal)
  }

  const toggleChangeGroupModal = () => {
    setChangeGroupModal(!changeGroupModal)
  }
  return (
    <Layout noTopPadding={true}>
       { currentTab == 'Playlist' && <PlaylistSearchHeader/>}
        
        {currentTab == 'Screen' && <ScreenSearchHeader createGroupHandler={toggleCreateGroupModal} createScreenHandler={toggleCreateScreenModal} />}

        {
          currentTab == 'Playlist' && <PlylistTable playlistDeleteHandler={playlistDeleteHandler} />
        }
        
        {
          currentTab == 'Screen' && <SreenLists toggleChangeGroupModal={toggleChangeGroupModal} toggleAddScreenModal={toggleAddScreenModal}/>
        }

        <BottomTab
          currentTab={currentTab}
          setCurrentTab={currentTabHandler}
          tabData={tabData}
        />

          {
            playlistDeleteModalShow && (
                <ConfirmationModal
                onClose={toggleDeleteModal}
                visible={playlistDeleteModalShow}
                mainTitle={'Move to Trash?'}
                infoTitle={'Birthday Whishses playlist will be deleted and moved to the Trash.'}
                />
            )
          }

          {
            <ScreenCreateModal
                onClose={toggleCreateScreenModal}
                visible={createScreenModal}
            />
          }

          {
            <CreateGroupModal
                onClose={toggleCreateGroupModal}
                visible={createGroupModal}
            />
          }

          {
            <AddScreenToGroupModal
              onClose={toggleAddScreenModal}
              visible={addScreenModal}
            />
          }

          {
            <ChangeGroupModal
              onClose={toggleChangeGroupModal}
              visible={changeGroupModal}
            />
          }
    </Layout>
  )
}

export default Studio;