import React, { useState } from 'react'
import SettingsVector from '../../../assets/image/settingsVector.jpg';
import { facebookRegex, googlePlusRegex, instagramRegex, twitterRegex } from '../../../helper/regexData';

const BrandSection = () => {
  const [brandData, setBrandData] = useState({
    brandName: '', facebook: '',
    instagram: '', twitter: '', google: ''
  })
  const [loading, setLoading] = useState(false);
  const [fbErr, setFbErr] = useState('')
  const [instaErr, setInstaErr] = useState('')
  const [xErr, setXErr] = useState('')
  const [googleErr, setGoogleErr] = useState('')
  
  const validateLink = (link, regex) => {
    return regex.test(link);
  };

  const brandUpdateHandler = () => {
    console.log('clicking')
    let isValid = true

    if (!validateLink(brandData?.facebook, facebookRegex)) {
        setFbErr('Invalid Facebook URL')
        isValid = false
    }

    if (!validateLink(brandData?.twitter, twitterRegex)) {
        setXErr('Invalid Twitter URL')
        isValid = false
    }

    if (!validateLink(brandData?.instagram, instagramRegex)) {
        setInstaErr('Invalid Instagram URL')
        isValid = false
    }

    if (!validateLink(brandData?.google, googlePlusRegex)) {
      setGoogleErr('Invalid Google URL')
      isValid = false
    }

    if(isValid){
      setLoading(true)
      console.log('validate ===>', brandData)
      setLoading(false)
    }
  }


  return (
   <div   className='flex flex-row justify-evenly w-full'>
        <div className='w-full lg:w-1/2 bg-[#EBEEF0] p-4 rounded-md'>
            
              <div className=' mt-4 justify-center'>
                  <div>
                      <div className='mt-2 lg:mt-11 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[100px]'>Brand Name</p>
                          <input 
                           onChange={(e) => {
                            setBrandData({...brandData, brandName: e.target.value})
                          }}
                          className='w-full md:w-4/5  bg-[#DDDDDD] rounded-md px-4 py-2 block md:inline ms-0 md:ms-4 mt-2 md:mt-0' placeholder='Brand Name' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4 lg:ms-4 flex flex-row  items-center'>
                            <p className='font-bold w-[115px]'>Logo</p>
                            <div className='bg-[#1199EE]  rounded-md'>
                              <h1 className='text-white italic font-bold text-xl md:text-2xl p-2'>PixPlay</h1>
                          </div>
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[100px]'>Facebook</p>
                          <input 
                          onChange={(e) => {
                            setBrandData({...brandData, facebook: e.target.value})
                            setFbErr('')
                          }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='https://www.facebook.com/yourusername' type="text" />
                      </div>
                      {
                         fbErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{fbErr}</p>
                        </div> 
                        }

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[100px]'>X</p>
                          <input
                          onChange={(e) => {
                            setBrandData({...brandData, twitter: e.target.value})
                            setXErr('')
                          }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='https://www.x.com/yourusername' type="text" />
                      </div>
                      {
                         xErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{xErr}</p>
                        </div> 
                        }

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[100px]'>Instagram</p>
                          <input
                          onChange={(e) => {
                            setBrandData({...brandData, instagram: e.target.value})
                            setInstaErr('')
                          }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='https://www.instagram.com/yourusername' type="text" />
                        
                      </div>
                      {
                         instaErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{instaErr}</p>
                        </div> 
                        }

                      <div className='mt-4 ms-0 lg:ms-4 lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-col items-center'>
                        <p className='font-bold w-[100px]'>Google</p>
                          <input
                          onChange={(e) => {
                            setBrandData({...brandData, google: e.target.value})
                            setGoogleErr('')
                          }}
                          className='w-full md:w-4/5 bg-[#DDDDDD] rounded-md px-4 py-2 block ms-0 md:ms-4 mt-2 md:mt-0' placeholder='https://plus.google.com/yourid' type="text" />
                          
                      </div>
                      {
                         googleErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500 text-center'>{googleErr}</p>
                        </div> 
                        }

                      <div className='flex flex-row justify-center mt-4 ps-0 lg:ps-4 w-full'>
                      <button onClick={brandUpdateHandler} className='w-full  bg-black text-white font-bold py-2 rounded-md'>SAVE</button>
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

export default BrandSection;
