import React, { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { IoSearch } from "react-icons/io5";
import MediaList from '../../../components/admin/Media/MediaList';
import MediaUploadModal from '../../../components/admin/Media/MediaModal/MediaUploadModal';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal';
import MediaViewModal from '../../../components/admin/Media/MediaModal/MediaViewModal';
import BottomTab from '../../../components/common/BottomTab/BottomTab';

const Media = () => {
  const tabData = ['All Media', 'Image', 'Video', 'Documents']
  const [showMediaUploadModal, setShowMediaUploadModal] = useState(false)
  const [currentTab, setCurrentTab] = useState('')
  const [mediaDeleteModalShow, setMediaDeleteModalShow] = useState(false)
  const [mediaViewModalShow, setMediaViewModalShow] = useState(false)

  const toggleUploadModal = () => {
    setShowMediaUploadModal(!showMediaUploadModal);
  };

  const toggleDeleteModal = () => {
    setMediaDeleteModalShow(!mediaDeleteModalShow)
  }

  const toggleViewModal = () => {
    setMediaViewModalShow(!mediaViewModalShow)
  }

  const mediaDeleteHandler = () => {
    toggleDeleteModal()
  }

  const mediaViewHandler = () => {
    toggleViewModal()
  }

  useEffect(() => {
    setCurrentTab('All Media')
  },[])


  const currentTabHandler = (tabName) => {
    setCurrentTab(tabName)
  }

  return (
    <Layout noTopPadding={true}>
        {/* <h1 className='text-center text-3xl font-bold'>Media Coming Soon</h1> */}
        <div className='w-full xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col justify-between items-center sticky top-16 z-999 bg-white px-4  h-[90px]'>
                <div className='flex flex-row items-center w-full'>
                    <p className='text-xl font-bold md:text-3xl'>Media</p>
                    <div className='flex flex-row items-center justify-start border border-2 border-gray-300 w-3/4 mx-auto rounded-md'>
                        <IoSearch size={20} className='mx-2'/>
                        <input className='block outline-none border-none px-2 py-2 h-[52px] ' type="text" placeholder='Search media' />
                    </div>
                </div>

                <div className='w-full lg:w-[200px]'>
                    <button onClick={() => setShowMediaUploadModal(true)} className='px-4 py-4 bg-[#015FDF] text-white font-bold rounded-md text-sm md:text-base w-full mt-4 md:mt-4 lg:mt-0'>Upload</button>
                </div>
        </div>
        
          <MediaList mediaDeleteHandler={mediaDeleteHandler} mediaViewHandler={mediaViewHandler}/>

          {
           showMediaUploadModal && <MediaUploadModal
            onClose={toggleUploadModal}
            visible={showMediaUploadModal}
            />
          }

          {
            mediaDeleteModalShow && (
                <ConfirmationModal
                onClose={toggleDeleteModal}
                visible={mediaDeleteModalShow}
                mainTitle={'Move to Trash?'}
                infoTitle={'image.png will be deleted and moved to the Trash.'}
                />
            )
          }

          {
            <MediaViewModal 
            onClose={toggleViewModal}
            visible={mediaViewModalShow}
            mediaDeleteHandler={mediaDeleteHandler}
            />
          }
        <BottomTab
          currentTab={currentTab}
          setCurrentTab={currentTabHandler}
          tabData={tabData}
        />
    </Layout>
  )
}

export default Media;