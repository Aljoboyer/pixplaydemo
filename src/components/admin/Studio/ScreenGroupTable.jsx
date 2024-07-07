import React from 'react'
import { GrAndroid } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import { RxDragHandleHorizontal } from "react-icons/rx";
import DropDownMenu from '../../common/DropDownManu/DropDownManu';

const ScreenGroupTable = ({toggleAddScreenModal, toggleChangeGroupModal}) => {

    const handleDropDownClick = (action) => {
        if(action == "changeGroup"){
            toggleChangeGroupModal()
        }
    }
  return (
    <div className='mt-4 p-4'>
        <div className='flex justify-start items-center'>
            <p className='bg-black text-white px-4 py-2 font-medium rounded-md'>Fare Court   2</p>
            <RxDragHandleHorizontal size={24} className='ms-2 cursor-pointer'/>
            <div className='flex justify-center items-center ms-4'>
                <GoPlusCircle size={20} className='text-blue-600' />
                <p onClick={toggleAddScreenModal} className='underline text-blue-600 cursor-pointer font-medium ms-2'>Add Screen</p>
            </div>
            
        </div>
         <div className='w-full overflow-y-visible overflow-x-auto  bg-white rounded'>
            <table className="w-full  table-auto overflow-visible mx-auto bg-gray-50 mt-4">
                <thead className=" bg-gray-100 ">
                    <tr className="bg-table-header">
                        <th className="px-6 lg:px-0 lg:ps-2 text-start  py-2 font-medium text-[12px]">Device</th>
                        <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Name</th>
                        <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Playlist</th>
                        <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]">Status</th>
                        <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]"></th>
                        <th className="px-6 lg:px-0 text-start  py-2 font-medium text-[12px]"></th>
                    </tr>
                </thead>

                <tbody>
                    {
                     [1,2,3]?.map((item) => (
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
                        <td className='text-start py-4'>
                            <DropDownMenu from="screenGroupTable" handleDropDownClick={handleDropDownClick}/>
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

export default ScreenGroupTable;