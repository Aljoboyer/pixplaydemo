import React from 'react'
import SettingsVector from '../../../assets/image/settingsVector.jpg';

const OrganisationSection = () => {
  return (
   <div   className='flex flex-row justify-evenly w-full'>
        <div className='w-full lg:w-1/2 bg-[#EBEEF0] p-4 rounded-md'>
            
              <div className=' mt-4 justify-center'>
                  <div>
                      <div className='mt-2 lg:mt-11 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Company Name</p>
                          <input className='w-full md:w-4/5  bg-[#DDDDDD] rounded-md px-4 py-2 block md:inline ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Company Name' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Email</p>
                          <input className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Organisation email' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Contact</p>
                          <input className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Phone number' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Address</p>
                          <input className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Organisation address' type="text" />
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

export default OrganisationSection;