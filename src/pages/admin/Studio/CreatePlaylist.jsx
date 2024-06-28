import React, { useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { MdDone } from "react-icons/md";
import { GoCopy } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CreatePlaylist = () => {
  const navigate = useNavigate()
  const [mediaNameEdit, setMediaNameEdit] = useState(false)


  return (
    <Layout noTopPadding={true}>
        <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full py-4'>
                <div className='w-full md:w-2/3 flex flex-row justify-start items-center'>
                    <FaRegArrowAltCircleLeft size={28} />
                    <p className='text-xl  font-bold md:text-3xl ms-2'>
                    Create Playlist</p>
                </div>
        </div>

        <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full py-4 px-0 lg:px-9'>
                <div className='w-full md:w-1/3'>
                    <div className='flex flex-row items-center '>
                        {
                            mediaNameEdit ? <input className='outline-none border-b-2 border-gray-300 px-2 py-2 text-base font-bold md:text-2xl' defaultValue="Birthday Wishes" />  : <h1 className='text-xl font-bold md:text-2xl'>Birthday Wishes</h1>
                        }
                        <div onClick={() => setMediaNameEdit(!mediaNameEdit)} className='w-fit cursor-pointer px-2'>
                                {!mediaNameEdit ? <HiPencil size={20}/> :  <MdDone size={24}/> }
                        </div>
                    </div>
                    <div className="flex flex-row items-center my-2">
                      <p className='text-base font-bold md:text-xl'>ID: 12234</p>
                      <GoCopy className='ms-2' />
                    </div>
                    <p className='text-base font-bold text-gray-400'>Published on 15April 2024 12:00 By Gautham</p>
                    <div className='border border- border-gray-700 rounded w-[210px] p-2 mt-4'>
                    <p className='text-base font-bold text-gray-400'>Total Duration: 00:15:00</p>
                    </div>
                </div>

                <div className='w-full md:w-2/3 xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col items-center justify-end'>
                      <button onClick={() => navigate('/dashboard/PlaylistPreview')} className='bg-black text-white font-medium w-[120px] h-[60px] flex flex-row items-center justify-center rounded'>Prview <IoMdEye className='ms-2'/></button>

                      <button className='bg-red-500 mx-4 text-white font-medium w-[120px] h-[60px] flex flex-row items-center justify-center rounded'>Delete <MdDelete className='ms-2'/></button>

                      <button className='side_bar_style text-white font-medium w-[120px] h-[60px] flex flex-row items-center justify-center rounded'>Publish <MdDone className='ms-2'/></button>
                </div>
        </div>

    </Layout>
  )
}

export default CreatePlaylist;