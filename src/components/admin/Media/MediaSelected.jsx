import React from 'react'
import { GoFileMedia } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

const MediaInfo = () => {
    return <div className='w-fit flex flex-row justify-center items-center py-2'>
            <div className='w-[50px] h-[50px] rounded-md bg-gray-200 flex flex-row justify-center items-center'>
                <GoFileMedia size={40} color='#1199EE' />
            </div>
            <div className='ms-2 w-[300px] md:w-fit'>
                <p className='text-base md:text-lg font-medium '>Image.png</p>
                <p className='text-sm  text-gray-400 italic'>9KB</p>
            </div>
        </div>
}


const MediaSelected = () => {
  return (
    
    <div className='w-full overflow-y-scroll overflow-x-auto  mt-4 bg-white p-4 rounded h-[400px] media_selected_div'>
            <table className="w-full  table-auto  mx-auto">
                <thead className="  ">
                    <tr className="bg-table-header">
                    <th className="text-left px-2 "></th>
                    <th className="text-center px-6 "></th>
                    <th className="text-center px-6 "></th>
                </tr>
                </thead>

                <tbody>
                   {
                    [1,2,3,4,5,6,7,8,9]?.map((item) => (
                      <tr className='border-b border-gray-300 px-2'>
                      <td className=' py-2 px-2'>
                            <MediaInfo/>
                      </td>
                      <td className='px-6 text-center py-2 italic text-gray-500'>
                          Image
                      </td>
                      <td className=' text-center py-2'>
                            <button className='bg-gray-200 p-2 rounded'><IoIosClose color='black' className='' size={24}/></button>
                      </td>
                  </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
  )
}

export default MediaSelected;