import React, { useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { BsThreeDots } from "react-icons/bs";
import { LiaShareSquareSolid } from "react-icons/lia"
import { MdOutlineDelete } from "react-icons/md";

const DropDownMenu = ({ handleDropDownClick}) => {

  return (
    <Menu as="div" className="relative inline-block text-right z-2 ">
    <div>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white w-[20px] text-sm font-semibold">
      <BsThreeDots className="cursor-pointer" size={20}/>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="bg-white absolute right-0 z-10 w-40 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
              <div  onClick={(e) => handleDropDownClick('resend')} className='flex flex-row items-center justify-end cursor-pointer p-2 hover:bg-[#0000000A]'>
              <LiaShareSquareSolid className='me-1'  size={20}/>
              <p className="font-medium">Resend Invite</p>
              </div>
          </Menu.Item>
          <Menu.Item>
               <div    onClick={(e) => handleDropDownClick('delete')} className='flex flex-row items-center justify-end cursor-pointer p-2 hover:bg-[#0000000A]'>
              <MdOutlineDelete color='red' className='me-2' size={24}/>
              <p className="font-medium text-red-400">Delete Invite</p>
              </div>
          </Menu.Item>
        
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  );
};

export default DropDownMenu;
