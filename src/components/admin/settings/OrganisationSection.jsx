import React, { useState } from 'react'
import SettingsVector from '../../../assets/image/settingsVector.jpg';
import { nameRegex } from '../../../helper/regexData';

const OrganisationSection = () => {
  const [organisationData, setOrganisationData] = useState({
    organizationName: '', email: '',
    contact: '', address: ''
  })
  const [organizationNameErr, setOrganizationNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('')
  const [contactErr, setContactErr] = useState('')
  
  const orgUpdateHandler = () => {
    let isValid = true;

    if(!organisationData?.organizationName ){
      setOrganizationNameErr('organization name required')
      isValid = false
      }

    if (nameRegex.test(organisationData?.organizationName) === false   || organisationData?.organizationName.trim().length === 0 ) {
      setOrganizationNameErr('Please write proper organization Name')
        isValid = false
    }
    if(organisationData?.email && !organisationData?.email.match(/\S+@\S+\.\S+/)){
      setEmailErr( 'Please input a valid email')
      isValid = false
    }
    if (!(/^\d+$/).test(organisationData.contact) && organisationData.contact) {
      setContactErr('Please input a valid phone number')
      isValid = false
    }

    if(isValid){
      console.log('org data ======>>', organisationData)
    }
  }

  return (
   <div   className='flex flex-row justify-evenly w-full'>
        <div className='w-full lg:w-1/2 bg-[#EBEEF0] p-4 rounded-md'>
            
              <div className=' mt-4 justify-center'>
                  <div>
                      <div className='mt-2 lg:mt-11 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Organization Name</p>
                          <input
                          onChange={(e) => {
                            setOrganisationData({...organisationData, organizationName: e.target.value})
                            setOrganizationNameErr('')
                          }}
                          className='w-full md:w-4/5  bg-[#DDDDDD] rounded-md px-4 py-2 block md:inline ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Organization Name' type="text" />
                      </div>

                      {
                        organizationNameErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{organizationNameErr}</p>
                        </div> 
                        }

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Email</p>
                          <input
                          onChange={(e) => {
                            setOrganisationData({...organisationData, email: e.target.value})
                            setEmailErr('')
                          }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Organisation email' type="text" />
                      </div>
                      {
                        emailErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{emailErr}</p>
                        </div> 
                        }
                        
                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Contact</p>
                          <input
                          onChange={(e) => {
                            setOrganisationData({...organisationData, contact: e.target.value})
                            setContactErr('')
                          }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Phone number' type="text" />
                      </div>
                      {
                        contactErr && <div className=' mt-2 '>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{contactErr}</p>
                        </div> 
                        }

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[130px]'>Address</p>
                          <input
                            onChange={(e) => {
                              setOrganisationData({...organisationData, address: e.target.value})
                            }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Organisation address' type="text" />
                      </div>

                      <div className='flex flex-row justify-center mt-4 ps-0 lg:ps-4 w-full'>
                      <button onClick={orgUpdateHandler} className='w-full  bg-black text-white font-bold py-2 rounded-md'>SAVE</button>
                      </div>
                  </div>
              </div>
          
        </div>
        <div className='hidden lg:block w-full lg:w-1/2'>
            <img className='w-full ' src={SettingsVector} alt="" />
        </div>
   </div>
  )
}

export default OrganisationSection;