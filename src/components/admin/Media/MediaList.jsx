import React from 'react'
import { GoFileMedia } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

const MediaInfo = () => {
    return <div className='w-fit flex flex-row justify-center items-center py-2'>
            <div className='w-[50px] h-[50px] rounded-md bg-gray-200 flex flex-row justify-center items-center'>
                <GoFileMedia size={40} color='#1199EE' />
            </div>
            <div className='ms-2 w-[300px] md:w-fit'>
                <p className='text-base md:text-lg font-medium '>Image.png</p>
                <p className='text-sm  text-gray-400 italic'>May 3rd, 2024 at 10:21 AM</p>
            </div>
        </div>
}

const MediaList = ({mediaDeleteHandler, mediaViewHandler}) => {
  return (
    <div className='bg-gray-100 p-4 mt-4 w-full rounded z-0 min-h-screen'>
        <div className='w-full overflow-y-visible overflow-x-auto  mt-4 bg-white p-4 rounded'>
            <table className="w-full  table-auto overflow-visible mx-auto">
                <thead className="  ">
                    <tr className="bg-table-header">
                    <th className="text-left px-2 py-4"></th>
                    <th className="text-center px-6 py-4"></th>
                    <th className="text-center px-6 py-4"></th>
                    <th className=""></th>
                </tr>
                </thead>

                <tbody>
                   {
                    [1,,2,3,4,5,6,7,8,9,10,11,12,14]?.map((item) => (
                      <tr onClick={mediaViewHandler} className='border-b border-gray-300 px-2 cursor-pointer hover:bg-gray-100'>
                      <td className=' py-2 px-2'>
                            <MediaInfo/>
                      </td>
                      <td className='px-6 text-center py-2 italic text-gray-500'>
                          Image 
                      </td>
                      <td className='px-6 text-center py-2 italic text-gray-500'>
                          9KB
                      </td>
                      <td className='w-[300px] text-center py-2'>
                        <MdOutlineDelete onClick={(e) => {
                             e.stopPropagation();
                             mediaDeleteHandler()
                        }} color='red' className='' size={24}/>
                      </td>
                  </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MediaList;

// 3,4,5,6,7,8,9,10,11,12,14,13,14,15,16,17,18,19,188,222,223,45