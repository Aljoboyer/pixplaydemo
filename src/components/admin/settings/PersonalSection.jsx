import React from 'react'
import SettingsVector from '../../../assets/image/settingsVector.jpg';
import ImageUpload from '../../common/ImageUpload/ImageUpload';

const PersonalSection = () => {
  return (
   <div   className='flex flex-row justify-evenly w-full'>
        <div className='w-full lg:w-1/2 bg-[#EBEEF0] p-4 rounded-md'>
            
              <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col mt-4 justify-center'>
                  <div>
                      <h1 className='text-xl md:text-2x lg:text-3xl font-bold text-start'>Details</h1>
                     <div className='mt-4'>
                      <ImageUpload/>
                        <h1 className='text-xl font-bold'>@admin</h1>
                     </div>
                  </div>

                  <div>
                      <div className='mt-2 lg:mt-11 ms-0 lg:ms-4'>
                          <input className='w-[1/2] bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='First Name' type="text" />
                          <input className='w-[1/2] bg-[#DDDDDD] rounded-md px-4 py-2 ms-0 sm:ms-2 md:ms-4 mt-4 md:mt-0' placeholder='Last Name' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4'>
                          <input className='w-full bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='Your Email' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4'>
                          <input className='w-full bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='Your Phone' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4'>
                          <input className='w-full bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='Your Department' type="text" />
                      </div>

                      <div className='flex flex-row justify-center mt-4 ps-0 lg:ps-4 w-full'>
                      <button className='w-full  bg-black text-white font-bold py-2 rounded-md'>SAVE</button>
                      </div>
                  </div>
              </div>
          
        </div>
        <div className='hidden lg:block w-full lg:w-1/2'>
            <img className='w-full ' src={SettingsVector} alt="" />
        </div>
   </div>
  )
}

export default PersonalSection;