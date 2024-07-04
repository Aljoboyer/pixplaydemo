import React, { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import BottomTab from '../../../components/common/BottomTab/BottomTab';
import PlylistTable from '../../../components/admin/Studio/PlylistTable';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal';
import PlaylistSearchHeader from '../../../components/admin/Studio/PlaylistSearchHeader';
import ScreenSearchHeader from '../../../components/admin/Studio/ScreenSearchHeader';
import SreenLists from '../../../components/admin/Studio/SreenLists';

const Studio = () => {
  const navigate = useNavigate()
  const tabData = ['Playlist', 'Screen', 'Channel',]
  const [currentTab, setCurrentTab] = useState('')
  const [playlistDeleteModalShow, setPlaylistDeleteModalShow] = useState(false)

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


  return (
    <Layout noTopPadding={true}>
       { currentTab == 'Playlist' && <PlaylistSearchHeader/>}
        
        {currentTab == 'Screen' && <ScreenSearchHeader/>}

        {
          currentTab == 'Playlist' && <PlylistTable playlistDeleteHandler={playlistDeleteHandler} />
        }
        
        {
          currentTab == 'Screen' && <SreenLists/>
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

    </Layout>
  )
}

export default Studio;