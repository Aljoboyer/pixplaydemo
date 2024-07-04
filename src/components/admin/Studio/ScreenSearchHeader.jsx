import React from 'react'
import { IoSearch } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";

const ScreenSearchHeader = () => {

  return (
    <div className='w-full  sticky top-16 z-999 bg-white  h-[180px] px-4 py-4'>
          <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center w-full'>
              <div className='w-full md:w-2/3 flex flex-row justify-start items-center'>
                 
                  <p className='text-xl  font-bold md:text-3xl lg:text-5xl ms-2'>
                  Sreen</p>
              </div>
              <div className='flex flex-row items-center justify-between border border-2 border-gray-300 w-full md:w-1/3 mt-4 md:mt-0 mx-auto rounded-md'>
                  <div className='flex flex-row items-center justify-start'>
                      <IoSearch size={20} className='mx-2'/>
                      <input className='block outline-none border-none px-2 py-2 h-[52px] w-[200px] md:w-[300px]' type="text" placeholder='Search screen' />
                  </div>
                  <button className='bg-[#015FDF] text-white font-bold px-4 py-4'>
                      Search
                  </button>
              </div>
          </div>

          
        <div className='flex flex-row justify-between items-center mt-4 bg-[#f6f8fb] p-4 rounded-md'>
        
            <div className='w-full md:w-2/3 flex flex-row justify-start items-center'>
                <GoPlusCircle size={22} />
                <p className='text-xl  font-bold ms-2 cursor-pointer'>Create Group</p>
             </div>
            
          <div className='w-full md:w-1/2 lg:w-[200px]'>
                <button  className='px-2 py-2 bg-[#015FDF] text-white font-bold rounded-md text-sm md:text-base lg:text-lg w-full mt-4 md:mt-4 lg:mt-0 cursor-pointer'>+ New Screen</button>
            </div>
        </div>
      
        </div>
  )
}

export default ScreenSearchHeader;