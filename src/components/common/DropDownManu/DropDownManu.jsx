import React, { useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { BsThreeDots } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DropDownMenu = ({ handleDropDownClick}) => {

  return (
    <Menu as="div" className="relative inline-block text-left z-10">
    <div>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white w-[20px] text-sm font-semibold">
      <BsThreeDots className="cursor-pointer"/>
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
              <p className="cursor-pointer p-2 hover:bg-[#0000000A]">Resend Invite</p>
          </Menu.Item>
          <Menu.Item>
                <p
              className="cursor-pointer p-2 hover:bg-[#0000000A]"
              onClick={(e) => handleDropDownClick('edit')}
            >
              Delete Invite
            </p>
          </Menu.Item>
        
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  );
};

export default DropDownMenu;
