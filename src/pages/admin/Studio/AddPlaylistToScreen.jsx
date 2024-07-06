import React, { useState } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal';
import { HiPencil } from "react-icons/hi2";
import AddPlaylistLogo from '../../../assets/image/addPlaylist.png'
import { TbSettings2 } from "react-icons/tb";
import { FaQrcode } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { CiPlay1 } from "react-icons/ci";
import { GoTag } from "react-icons/go";

const AddPlaylistToScreen = ({}) => {
  const [mediaNameEdit, setMediaNameEdit] = useState(false)
  const navigate = useNavigate()
  const [playlistDeleteModalShow, setPlaylistDeleteModalShow] = useState(false)
  
  const toggleDeleteModal = () => {
    setPlaylistDeleteModalShow(!playlistDeleteModalShow)
  }

  return (
    <Layout noTopPadding={true}>
        <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full mt-4 py-4'>
            <div className='w-full md:w-1/3'>
                <div className='flex flex-row items-center '>
                    <FaRegArrowAltCircleLeft onClick={() => navigate(-1)} size={28} />
                    {
                        mediaNameEdit ? <input className='outline-none border-b-2 border-gray-300 px-2 py-2 text-base font-bold md:text-2xl' defaultValue="Reception Main" />  : <h1 className='text-xl font-bold md:text-2xl ms-2'>Reception Main</h1>
                    }
                    <div onClick={() => setMediaNameEdit(!mediaNameEdit)} className='w-fit cursor-pointer px-2'>
                            {!mediaNameEdit ? <HiPencil size={20}/> :  <MdDone size={24}/> }
                    </div>
                </div>
                <div className='flex justify-start items-center mt-2 ms-0 md:ms-4'>
                    <GoTag size={14} />
                    <p className='text-gray-600 text-[12px] ms-2'>Bangalore Main+</p>
                </div>
            </div>

            <div className='w-full md:w-1/6'>
                <p className='text-gray-400 font-medium text-[14px]'>Total Duration</p>
                <p className='font-bold'>20:05:05</p>
            </div>

            <div className='w-full md:w-2/4 xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center justify-end'>
                  <button className='bg-[#DDDDDD] font-medium  flex flex-row items-center justify-center rounded hover:bg-blue-600 hover:text-white lg:w-[120px] w-[80px] lg:h-[60px] h-[40px]'>Share</button>

                  <button onClick={toggleDeleteModal} className='bg-[#DDDDDD] font-medium lg:w-[120px] w-[80px] lg:h-[60px] h-[40px]  flex flex-row items-center justify-center rounded hover:bg-blue-600 hover:text-white mx-4'>Delete</button>

                  <button  className='bg-[#DDDDDD] font-medium  flex flex-row items-center justify-center rounded hover:bg-blue-600 hover:text-white lg:w-[120px] w-[80px] lg:h-[60px] h-[40px]'>Unpublish</button>
            </div>
        </div>
       
        <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col items-start w-full mt-7 py-4'>
            <div className='w-3/5 px-4'>
                <div className='flex flex-row justify-between items-center bg-gray-50 p-2 rounded'>
                    <div className='flex items-center'>
                        <CiPlay1 size={20}/>
                        <span className='underline ms-2 text-[18px]'>Birthday Whishes</span>
                    </div>

                    <div className='flex items-center justify-center p-2 bg-gray-100 rounded-md'>
                        <p className='text-[18px]'>3 Playlists</p>
                        <CiPlay1 className='ms-2' size={20}/>
                    </div>

                    <div className='flex items-center'>
                        <p className="text-[18px] mr-2">Update</p>
                        <select  className='border border-1 border-gray-600 p-2 rounded-md mt-2'>
                            <option value="Sync">Sync</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-center'>
                     <img src={AddPlaylistLogo} alt="" />
                </div>
                <div className='flex justify-center'>
                    <button className='text-center w-[250px] py-4 side_bar_style text-white font-bold text-lg my-4  rounded'>+ Add Playlist</button>
                </div>
            </div>

            <div className='w-2/5  border border-1 border-gray-300'>
                  <div className='p-2'>
                    <p className='text-lg md:text-2xl font-bold text-center'>Details</p>
                  </div>

                  <div className='flex flex-row justify-between items-center side_bar_style p-2'>
                    <p className='text-white font-bold'>Reception Main</p>

                    <p className='text-white font-bold text-[20px]'>ONLINE</p>

                    <p className='text-white font-bold'>ID: 69008</p>
                  </div>

                  <div className='flex flex-row justify-between items-center qr_code_div px-2 py-4'>
                        <div className='text-white'>
                            <div className='flex items-center'>
                                <TbSettings2 color='white' size={18}/>
                                <p className='text-xl font-medium ms-2 underline'>Details</p>
                            </div>
                            <p className='text-[14px] ms-5'>3 Playlists</p>
                            <p className='text-[14px] ms-5'>12min 13sec</p>
                            <p className='text-[14px] ms-5'>15 Assets</p>
                        </div>


                        <div>
                            <FaQrcode className='cursor-pointer' size={50} />
                        </div>

                        <div className='flex flex-col items-center'>
                            <IoLogoAndroid size={45} color='#a9c147' />
                            <p className='text-lg text-white'>Samsun A+</p>
                            <p className='text-[14px] text-white'>2402 x 1080</p>
                        </div>
                  </div>

                  <div>
                        <div className='flex items-center justify-start p-4'>
                            <TbSettings2  size={18}/>
                            <p className='underline text-xl font-medium'>Signals</p>
                        </div>

                        <div className='flex justify-between items-center border border-1 border-gray-300 p-4'>
                            <p className='font-medium text-[18px]'>IP Address</p>

                            <div className='flex items-center'>
                                <p className='underline font-medium'>198.255.255.01</p>
                                <LuCopy className='ms-[4px] font-medium'/>
                            </div>
                        </div>

                        <div className='flex justify-between items-center border border-1 border-gray-300 p-4'>
                            <p className='font-medium text-[18px]'>Timezone</p>

                            <div className='flex items-center'>
                                <p className='underline font-medium'>Asia/Kolkata</p>
                                <LuCopy className='ms-[4px] font-medium'/>
                            </div>
                        </div>

                        <div className='flex justify-between items-center border border-1 border-gray-300 p-4'>
                            <p className='font-medium text-[18px]'>Active</p>

                            <div className='flex items-center'>
                                <p className='underline font-medium'>16 Jan 2024, 05:55PM</p>
                                <LuCopy className='ms-[4px] font-medium'/>
                            </div>
                        </div>

                        <div className='flex justify-between items-center border border-1 border-gray-300 p-4'>
                            <p className='font-medium text-[18px]'>Created</p>

                            <div className='flex items-center'>
                                <p className='underline font-medium'>Gautham</p>
                                <LuCopy className='ms-[4px] font-medium'/>
                            </div>
                        </div>
                  </div>
            </div>
            
        </div>
        
        {
            playlistDeleteModalShow && (
                <ConfirmationModal
                onClose={toggleDeleteModal}
                visible={playlistDeleteModalShow}
                mainTitle={'Move to Trash?'}
                infoTitle={'Reception main screen will be deleted and moved to the Trash.'}
                />
            )
          }
    </Layout>
  )
}

export default AddPlaylistToScreen;