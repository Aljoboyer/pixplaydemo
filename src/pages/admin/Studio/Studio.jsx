import React, { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import BottomTab from '../../../components/common/BottomTab/BottomTab';
import PlylistTable from '../../../components/admin/Studio/PlylistTable';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Studio = () => {
  const navigate = useNavigate()
  const tabData = ['Playlist', 'Channel', 'Screen']
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
        <div className='w-full  sticky top-16 z-999 bg-white  h-[180px] px-4 py-4'>
          <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full'>
              <div className='w-full md:w-2/3 flex flex-row justify-start items-center'>
                  <FaRegArrowAltCircleLeft size={28} />
                  <p className='text-xl  font-bold md:text-3xl ms-2'>
                  My PlayList</p>
              </div>
              <div className='flex flex-row items-center justify-between border border-2 border-gray-300 w-full md:w-1/3 mt-4 md:mt-0 mx-auto rounded-md'>
                  <div className='flex flex-row items-center justify-start'>
                      <IoSearch size={20} className='mx-2'/>
                      <input className='block outline-none border-none px-2 py-2 h-[52px] w-[200px] md:w-[300px]' type="text" placeholder='Search playlist' />
                  </div>
                  <button className='bg-[#015FDF] text-white font-bold px-4 py-4'>
                      Search
                  </button>
              </div>
          </div>

          {
            currentTab == 'Playlist' && <div className='flex flex-row justify-between items-center mt-4 bg-[#f6f8fb] p-4 rounded-md'>
            <p className='text-xl  font-bold '>
            Total List - 5</p>
          <div className='w-full md:w-1/2 lg:w-[200px]'>
                <button onClick={() => navigate('/dashboard/PlaylistCreateOptions')} className='px-2 py-2 bg-[#015FDF] text-white font-bold rounded-md text-sm md:text-base lg:text-lg w-full mt-4 md:mt-4 lg:mt-0 cursor-pointer'>+ New Playlist</button>
            </div>
        </div>
          }
      </div>
        {
          currentTab == 'Playlist' && <PlylistTable playlistDeleteHandler={playlistDeleteHandler} />
        }
        {
          currentTab == 'Channel' && <div className='z-0 min-h-screen'>
            <h1 className='font-bold text-5xl'>Coming Soon.....</h1>
          </div>
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