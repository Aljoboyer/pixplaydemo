import React from 'react'
import { GrAndroid } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";

const ScreenUngroupTable = () => {
  return (
    <div>
         <div className='w-full overflow-y-visible overflow-x-auto  mt-4 bg-white p-4 rounded'>
            {
                [1,2,3]?.map((item) => (
                <table className="w-full  table-auto overflow-visible mx-auto bg-gray-50 mt-4">
                    <thead className=" bg-gray-100 ">
                        <tr className="bg-table-header">
                            <th className="px-6 lg:px-0 lg:ps-2 text-start  py-2 font-medium text-[12px]">Device</th>
                            <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Name</th>
                            <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Playlist</th>
                            <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Status</th>
                            <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className=' cursor-pointer '>
                        <td className='ps-2  py-2 md:w-[100px]'>
                        <GrAndroid size={24} color='#a9c147' />
                        </td>
                        <td className=' text-start py-2 font-medium md:w-[280px]'>
                            <p className='font-bold'>Reception Main</p>
                        </td>
                        <td className=' text-start py-2 font-medium flex items-center md:w-[300px]'>
                            {
                                item == 1 ? <><GoPlusCircle size={20} className='text-blue-600' />
                            <span className='underline ms-2 text-blue-600'>Add Playlist</span></> : <><CiPlay1/>
                            <span className='underline ms-2'>Birthday Whishes</span></>
                            }
                        </td>
                        
                            <td className='lg:px-0 text-start py-4 '>
                                <span className='bg-green-500 p-2 rounded-full font-medium text-white text-[12px]'>Online</span>
                            </td>
                            <td className='text-start py-4'>
                                <span className='bg-blue-500 p-2 rounded-full font-medium text-white text-[12px]'>Published</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                ))
            }
        </div>
    </div>
  )
}

export default ScreenUngroupTable;