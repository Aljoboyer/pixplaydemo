import React, { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { IoSearch } from "react-icons/io5";
import BottomTab from '../../../components/common/BottomTab/BottomTab';

const Studio = () => {
    const tabData = ['Playlist', 'Channel', 'Screen']
  const [currentTab, setCurrentTab] = useState('')

  useEffect(() => {
    setCurrentTab('Playlist')
  },[])


  return (
    <Layout noTopPadding={true}>
         <div className='w-full xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col justify-between items-center sticky top-16 z-999 bg-white  h-[90px] px-4'>
                <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full'>
                    <p className='text-xl font-bold md:text-3xl'>PlayList</p>
                    <div className='flex flex-row items-center justify-between border border-2 border-gray-300 w-full md:w-3/4 mt-4 md:mt-0 mx-auto rounded-md'>
                        <div className='flex flex-row items-center justify-start'>
                            <IoSearch size={20} className='mx-2'/>
                            <input className='block outline-none border-none px-2 py-2 h-[52px] ' type="text" placeholder='Search playlist' />
                        </div>
                        <button className='bg-[#015FDF] text-white font-bold px-4 py-4'>
                            Search
                        </button>
                    </div>
                </div>

                <div className='w-full lg:w-[200px]'>
                    <button onClick={() => setShowMediaUploadModal(true)} className='px-4 py-4 bg-[#015FDF] text-white font-bold rounded-md text-sm md:text-base lg:text-lg w-full mt-4 md:mt-4 lg:mt-0'>+ New Playlist</button>
                </div>
        </div>
        <div className='min-h-screen'>

        </div>
        <BottomTab
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabData={tabData}
        />
    </Layout>
  )
}

export default Studio;