import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const LandingNavBar = () =>  {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="w-full flex flex-row items-center justify-end mt-0 md:mt-20">
                
                <div className='px-4 me-0 md:me-40'>
                  <h4 className='text-white font-bold text-5xl italic'>PixPlay</h4>
                </div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex flex-row justify-evenly px-2  bg-white py-2 rounded">
                      <button className='outline-none px-6 py-2 font-medium'>Solution</button>
                      <button className='outline-none px-6 py-2 font-medium'>Product</button>
                      <button className='outline-none px-6 py-2 font-medium'>Blog</button>
                      <button className='outline-none px-6 py-4 bg-[#1199EE] text-white font-medium rounded'>Dashboard</button>

                  </div>
                </div>
              </div>

             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <div className='flex flex-col items-start px-4'>
                  <Disclosure.Button className="mt-4 text-white font-medium">Solution</Disclosure.Button>
                  <Disclosure.Button className="mt-4 text-white font-medium">Product</Disclosure.Button>
                  <Disclosure.Button className="mt-4 text-white font-medium">Blog</Disclosure.Button>
                  <Disclosure.Button className="mt-4 text-white font-medium">Dashboard</Disclosure.Button>
                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default  LandingNavBar