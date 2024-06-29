import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { CiPlay1 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import TvLogo from '../../../assets/image/firetv.png'

const PlaylistPreview = () => {
    const navigate = useNavigate()
    const [rotation, setRotation] = useState('Landscape')
    return (
        <div className="flex items-center justify-center w-full min-h-screen px-4 bg-black">
            <div className="h-auto p-4 bg-white rounded-lg xs:mx-3 md:w-4/5 w-full ">
               <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-row items-center '>
                        <FaRegArrowAltCircleLeft size={28} />
                       <p className='text-xl  font-bold md:text-3xl ms-2'>
                        Preview</p>
                    </div>
                    
                    <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate('/dashboard/Studio')
                    }}
                    className='cursor-pointer'>
                        <MdOutlineCancel size={30} color='black' />
                    </div>
               </div>
               
                <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col w-full justify-between items-start p-4'>
                    <div className='w-1/6 flex flex-row justify-start items-center'>
                        <PiTelevisionSimpleBold size={24}/>
                        <p className='text-lg font-medium ms-2'>Enlarge</p>
                    </div>

                    <div className='w-2/6 flex flex-row justify-center items-center'>
                        <select onChange={(e) => setRotation(e.target.value)} className='border border-1 border-gray-600 p-2 rounded-md'>
                            <option value="Landscape">Landscape</option>
                            <option value="Potrait">Potrait</option>
                        </select>

                        <select className='border border-1 border-gray-600 p-2 rounded-md ms-4'>
                            <option value="Landscape">Full HD 1920*1080</option>
                        </select>
                    </div>

                    
                </div>

                <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col w-full justify-between items-start w-full'>
                    <div className='w-4/5 bg-gray-100 h-[800px] p-2 flex flex-row justify-center items-center'>
                        {
                            rotation == 'Landscape' ? <div className='w-[750px] h-[500px]'>
                                <img src={TvLogo} className='w-full h-full' />
                            </div> : <div className=' w-[500px] h-[700px]'>
                            <img src={TvLogo} className='w-full h-full' />
                            
                            </div>
                        }
                    </div>
                    <div className='w-1/5 ms-2'>
                        <div className=' flex flex-row justify-start items-center side_bar_style p-2'>
                            <CiPlay1 color='white' size={24}/>
                            <p className='text-lg font-bold text-white ms-2'>Playing</p>
                        </div>
                        {
                            [1,2,3,4,5,6]?.map((item) => (
                            <div className='border border-1 border-gray-500 p-2 flex flex-row items-center'>
                                <div className='w-[40px] h-[40px]'>
                                <img src={TvLogo} className='w-full h-full' />
                                </div>
                                 <p className='font-medium ms-2'>Birthday image 1.png</p>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistPreview;
