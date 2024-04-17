import React from 'react'
import { VscDeviceCameraVideo } from "react-icons/vsc";
import PlaceHolderImg from '../../../assets/image/placeholder-image.webp';
import { CiImageOn, CiFileOn  } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LandingHeader = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full container mx-auto  lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col  justify-center  p-2 md:p-7 pt-0 md:pt-24'>
            <div className='w-4/5 md:w-2/6 lg:w-3/12 mx-auto lg:mx-0'>
                <h4 className='text-white font-medium text-xl italic mt-11'>Your brand, our innovation-a perfect match in the digital revolation!</h4>

                <div className='bg-black py-4 mt-7 rounded-lg'>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <div className='h-[40px] w-[40px]  flex flex-row justify-center items-center rounded mx-4 landing_page_iconBox'>
                                <VscDeviceCameraVideo size={30} color='white'/>
                            </div>
                            <p className='text-white text-xs text-center mt-2 font-medium'>Discover</p>
                        </div>

                        <div>
                            <div className='h-[40px] w-[40px]   flex flex-row justify-center items-center rounded landing_page_iconBox'>
                                <CiImageOn size={30} color='white'/>
                            </div>
                            <p className='text-white text-xs text-center mt-2 font-medium'>Engage</p>
                        </div>

                        <div>
                            <div className='h-[40px] w-[40px]   flex flex-row justify-center items-center rounded mx-4 landing_page_iconBox'>
                                <CiFileOn size={30} color='white'/>
                            </div>
                            <p className='text-white text-xs text-center mt-2 font-medium'>Acquire</p>
                        </div>

                        <div>
                            <div className='h-[40px] w-[40px]   flex flex-row justify-center items-center rounded landing_page_iconBox'>
                                <IoLinkOutline  size={30} color='white'/>
                            </div>
                            <p className='text-white text-xs text-center mt-2 font-medium'>Retain</p>
                        </div>

                    </div>

                    <div className='flex flex-row justify-center mt-4 '>
                        <button onClick={() => navigate('/login')} className='font-bold bg-white px-5 py-2 mx-2 rounded'>Login</button>
                        <button className='font-bold bg-white px-5 py-2 mx-2 rounded'>Sign Up</button>
                    </div>
                </div>

                <h4 className='text-white text-center mt-7'>You Agree To Our Terms Of Use <br/> And Privacy Policy.</h4>

            </div>

            <div className='w-4/5 md:w-3/5 flex flex-col items-center justify-center mx-auto lg:mx-0 mt-4 lg:mt-0'>
                <img className='w-fit md:w-3/4 ' src={PlaceHolderImg} alt="" />

               <div className='w-fit md:w-3/4'>
               <h4 className='text-white font-bold text-sm lg:text-lg  mt-2'>Our Innovative Solution Seamlessly integrates sensor-based engagement and activations to transform traditional marketing.advertising, and customer management for brands in the retail industry.</h4>
               </div>
            </div>
    </div>
  )
}

export default LandingHeader;