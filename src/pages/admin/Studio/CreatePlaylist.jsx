import React, { useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { MdDone } from "react-icons/md";
import { GoCopy } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import TvLogo from '../../../assets/image/firetv.png'
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDragMove2Fill } from "react-icons/ri";

const CreatePlaylist = () => {
  const navigate = useNavigate()
  const [mediaNameEdit, setMediaNameEdit] = useState(false)
  const [currentBtn , setCurrentBtn] = useState('Library')
  const [checked, setChecked] = useState(false)

  console.log('checked', checked)
  return (
    <Layout noTopPadding={true}>
        <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full py-4'>
                <div className='w-full md:w-2/3 flex flex-row justify-start items-center'>
                    <FaRegArrowAltCircleLeft onClick={() => navigate('/dashboard/Studio')} size={28} />
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
        
        <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col items-start w-full '>
            <div className='w-3/5 px-4'>
                {
                  [1,2,3]?.map((item) => (
                    <div className='flex flex-row justify-between items-center border border-1 border-gray-500 p-4'>
                    <div className='flex flex-row justify-start items-center'>
                        <div className='w-[40px] h-[40px]'>
                          <img src={TvLogo} className='w-full h-full' />
                        </div>
                        <p className='font-medium ms-2 text-xl'>Birthday Wishes</p>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <button className='bg-gray-100 p-2 rounded-md'><FaMinus/></button>
                        <p className='font-medium mx-2'>7"</p>
                        <button className='bg-gray-200 p-2 rounded-md'><FaPlus/></button>
                    </div>

                    <div className='flex flex-row justify-center items-center'>
                        <p className='font-medium text-lg mr-9'>Image</p>
                        <RiDragMove2Fill size={25}/>
                    </div>
                    </div>
                  ))
                }

                <button className='text-center w-[250px] py-4 bg-[#1199EE] text-white font-bold text-lg my-4  rounded'>+ Add Content</button>
            </div>

            <div className='w-2/5 bg-[#DDDDDD]'>
                  <div className='flex flex-row items-center justify-center bg-[#DDDDDD]'>
                      <button onClick={() => setCurrentBtn('Library')} className={`${currentBtn == "Library" ? "bg-white shadow-md text-xl font-medium text-blue-400 w-1/2 py-4" : "bg-[#DDDDDD] drop-shadow-md text-xl font-medium text-gray-400 w-1/2 py-4"}`}>Library</button>
                      <button onClick={() => setCurrentBtn('Setting')} className={`${currentBtn == "Setting" ? "bg-white shadow-md text-xl font-medium text-blue-400 w-1/2 py-4" : "bg-[#DDDDDD] drop-shadow-md text-xl font-medium text-gray-400 w-1/2 py-4"}`}>Setting</button>
                  </div>

                  <div className='flex flex-row justify-between items-center p-2'>
                      <div className='flex flex-row justify-start items-center w-4/5'>
                          <input className='p-2 rounded outline-none' placeholder='Search playlist'/>
                          <button className='bg-[#1199EE] text-white font-medium p-2 rounded'>Search</button>
                      </div>

                      <div className='w-1/5'>
                        <select className='border border-1 border-gray-600 p-2 rounded-md'>
                              <option value="All">All</option>
                              <option value="Image">Image</option>
                              <option value="Video">Video</option>
                          </select>
                      </div>
                  </div>

                  <div className='flex flex-row justify-between items-center p-2'>
                        <p className='font-bold'>Library {`>`} All </p>
                        
                        <button className='bg-white px-4 py-2 rounded text-[20px] font-bold'><FaPlus/></button>
                  </div>

                  {
                    [1,2,3,4]?.map((item) => (
                      <div className='flex flex-row justify-between items-center bg-white border border-1 border-gray-500 p-4'>
                        <div className='flex flex-row justify-start items-center'>
                            <div className='w-[40px] h-[40px]'>
                              <img src={TvLogo} className='w-full h-full' />
                            </div>
                             <div>
                                <p className='font-medium ms-2'>Birthday Celebrate 098405843.png</p>
                                <p className='ms-2 text-[11px] text-gray-400'>Image</p>
                             </div>
                        </div>

                        <button onClick={() => navigate('/dashboard/PlaylistPreview')} className='p-2 border border-1 border-gray-400 rounded-md bg-white'>
                          <IoMdEye size={25} />
                        </button>

                        {
                          checked ? <button onClick={() => setChecked(false)}><FaSquareCheck color='#1199EE' size={28}/></button>  : <button onClick={() => setChecked(true)}><FaRegSquareCheck size={28}/></button>
                            
                          }
                      </div>
                    ))
                  }

                  <button className='text-center w-[250px] py-4 bg-[#1199EE] text-white font-bold text-lg my-4 mx-4 rounded'>Insert</button>
            </div>

        </div>
    </Layout>
  )
}

export default CreatePlaylist;