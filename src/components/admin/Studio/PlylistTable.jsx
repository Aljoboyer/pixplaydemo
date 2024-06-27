import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { IoPlayCircleSharp } from "react-icons/io5";


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
{/* <MdOutlineDelete color='red' className='' size={24}/> */}

const PlylistTable = () => {
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
                  <td className=' text-center py-2 italic text-gray-500'>
                      00:20:90 
                  </td>
                  <td className=' text-center py-2 italic text-gray-500'>
                      April 1 2024
                  </td>
                  <td className=' text-center py-2'>
                    15:30:24
                  </td>
                  <td className=' text-center py-2'>
                    542990
                  </td>
                  <td className='px-6 lg:px-0 text-center py-2'>
                    Published
                  </td>
                  <td className='px-6 lg:px-0 text-center py-2'>
                    Preview
                  </td>
                  <td className='px-6 lg:px-0 text-center py-2'>
                    Delete
                  </td>
                  <td className=' text-center py-2'>
                    <input type="checkbox"/>
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