import React, { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { IoSearch } from "react-icons/io5";
import MediaList from '../../../components/admin/Media/MediaList';
import MediaUploadModal from '../../../components/admin/Media/MediaUploadModal/MediaUploadModal';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal';

const Media = () => {
  const [showMediaUploadModal, setShowMediaUploadModal] = useState(false)
  const [currentTab, setCurrentTab] = useState('')
  const [mediaDeleteModalShow, setMediaDeleteModalShow] = useState(false)

  const toggleUploadModal = () => {
    setShowMediaUploadModal(!showMediaUploadModal);
  };

  const toggleDeleteModal = () => {
    setMediaDeleteModalShow(!mediaDeleteModalShow)
  }
  const mediaDeleteHandler = () => {
    toggleDeleteModal()
  }
  useEffect(() => {
    setCurrentTab('All')
  },[])
  return (
    <Layout>
        {/* <h1 className='text-center text-3xl font-bold'>Media Coming Soon</h1> */}
        <div className='w-full xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col justify-between items-center sticky top-16 z-999 bg-white  py-4 px-4'>
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
        
          <MediaList mediaDeleteHandler={mediaDeleteHandler}/>

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
          <div className='w-full  sticky bottom-0 z-999 bg-white  py-4 px-4 border border-t-2 border-gray-200'>
            <div className="overflow-x-auto whitespace-no-wrap lg:overflow-x-none">
              <div className="inline-flex  mx-2">
                <div className="ms-2">
                  <button 
                  onClick={() => setCurrentTab('All')}
                  className={` font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'All' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>All</button>
                </div>

                <div className="mx-4">
                  <button
                 onClick={() => setCurrentTab('Image')}
                  className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Image' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Image</button>
                </div>

                <div className="">
                  <button
                  onClick={() => setCurrentTab('Video')}
                  className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Video' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Video</button>
                </div>

                <div className="mx-4">
                  <button
                  onClick={() => setCurrentTab('Documents')}
                  className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == 'Documents' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Documents</button>
                </div>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default Media;