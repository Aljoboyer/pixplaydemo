import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { IoPlayCircleSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const PlaylistInfo = () => {
  return <div className='w-fit flex flex-row justify-center items-center py-2'>
          <div className='w-[50px] h-[50px] rounded-md bg-gray-200 flex flex-row justify-center items-center'>
              <IoPlayCircleSharp size={40} color='#1199EE' />
          </div>
          <div className='ms-2  md:w-fit'>
              <p className='text-base md:text-lg font-medium '>Birthday Wishes</p>
          </div>
      </div>
}

const PlylistTable = ({mediaViewHandler}) => {
  return (
    <div className='bg-gray-100 p-4 mt-4 w-full rounded z-0 min-h-screen'>
    <div className='w-full overflow-y-visible overflow-x-auto  mt-4 bg-white p-4 rounded'>
        <table className="w-full  table-auto overflow-visible mx-auto">
            <thead className="  ">
              <tr className="bg-table-header">
                <th className="px-6 lg:px-0 text-center px-2 py-4">Name</th>
                <th className="px-6 lg:px-0 text-center  py-4">Duration</th>
                <th className="px-6 lg:px-0 text-center  py-4">Log</th>
                <th className="px-6 lg:px-0 text-center py-4">Time</th>
                <th className="px-6 lg:px-0 text-center py-4">ID</th>
                <th className="px-6 lg:px-0 text-center  py-4">Status</th>
                <th className="px-6 lg:px-0  py-4"></th>
                <th className="px-6 lg:px-0"></th>
                <th className="px-6 lg:px-0"></th>
            </tr>
            </thead>

            <tbody>
               {
                [1,,2,3,4,5,6,7,8,9,10,11,12,14]?.map((item) => (
                  <tr className='border-b border-gray-300 px-2 cursor-pointer hover:bg-gray-100'>
                  <td className=' py-2 '>
                        <PlaylistInfo/>
                  </td>
                  <td className=' text-center py-2 text-white'>
                      <span className='bg-black p-2 rounded font-medium'>00:20:90</span>
                  </td>
                  <td className=' text-center py-2 font-medium'>
                      April 1 2024
                  </td>
                  <td className=' text-center py-2 font-medium'>
                    15:30:24
                  </td>
                  <td className=' text-center py-2 font-medium'>
                    542990
                  </td>
                  <td className='px-6 lg:px-0 text-center py-2'>
                    <span className='bg-green-500 p-2 rounded-full font-medium text-white'>Published</span>
                  </td>
                  <td className='px-6 lg:px-0 text-center py-2 '>
                    <p onClick={(e) => {
                      e.stopPropagation();
                      mediaViewHandler()
                    }} className='bg-black text-white font-medium py-2 rounded-md text-[11px] md:text-base px-2 lg:px-0'>Preview <IoMdEye className='inline' color='white'/></p>
                  </td>
                  <td className='px-6 lg:px-0 text-center py-2'>
                    <p className='bg-red-500 text-white font-medium py-2 rounded-md ms-2 text-[11px] md:text-base px-2 lg:px-0'>Delete <MdDelete className='inline' color='white'/></p>
                  </td>
                  <td className=' text-center py-2'>
                    <input type="checkbox" className=''/>
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

export default PlylistTable;