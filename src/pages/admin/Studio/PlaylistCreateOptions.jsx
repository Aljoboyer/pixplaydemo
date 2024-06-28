import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Layout from '../../../components/common/Layouts/Layout';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const PlaylistCreateOptions = () => {
    const navigate = useNavigate()
  return (
    <Layout noTopPadding={true}>
        <div className='w-full'>
            <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full py-4'>
                <div className='w-full md:w-2/3 flex flex-row justify-start items-center'>
                    <FaRegArrowAltCircleLeft size={28} />
                    <p className='text-xl  font-bold md:text-3xl ms-2'>
                    Choose Format</p>
                </div>
                <div className='flex flex-row items-center justify-between border border-2 border-gray-300 w-full md:w-1/3 mt-4 md:mt-0 mx-auto rounded-md'>
                    <div className='flex flex-row items-center justify-start'>
                        <IoSearch size={20} className='mx-2'/>
                        <input className='block outline-none border-none px-2 py-2 h-[52px] w-[200px] md:w-[300px]' type="text" placeholder='Search Scree/Page' />
                    </div>
                    <button className='bg-[#015FDF] text-white font-bold px-4 py-4'>
                        Search
                    </button>
                </div>
            </div>

            <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full py-4 justify-evenly'>
                <div onClick={() => navigate('/dashboard/CreatePlaylist')} className='flex flex-row items-end landing_home_main_container w-[500px] h-[600px] rounded-lg cursor-pointer'>
                    <div className='w-full playlist_format_options flex flex-row items-center justify-center h-[80px] '>
                        <p className='text-white font-bold text-xl md:text-3xl text-center '>Multimedia</p>
                    </div>
                </div>

                <div className='flex flex-row items-end  w-[500px] h-[600px] side_bar_style  rounded-lg cursor-pointer'>
                <div className='w-full playlist_format_options flex flex-row items-center justify-center h-[80px]'>
                        <p className='text-white font-bold text-xl md:text-3xl text-center '>Weblink</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default PlaylistCreateOptions;