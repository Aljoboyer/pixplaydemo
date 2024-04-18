import React from 'react'
import PlaceHolderImg from '../../../../assets/image/placeholder-image.webp';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-fit xl:h-screen landing_home_main_container lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col '>
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
            <div className='flex flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-7'>
               <h4 onClick={() => navigate('/')}  className='text-white font-bold text-3xl italic cursor-pointer'>PixPlay</h4>
               <h4 onClick={() => navigate('/login')} className='text-white  text-2xl  cursor-pointer'>LOGIN</h4>
            </div>

           <div className='px-4 md:px-10 lg:px-24 pt-11'>
              <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic mt-11'>Your brand, our innovation-a perfect match in the digital revolation!</h4>

                 <div className='bg-black p-4 mt-7 rounded-lg'>
                      <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic '>Details</h4>

                      <div className='mt-4'>
                          <label className='text-white font-medium' htmlFor="email">Name *</label>
                          <input className='outline-none border-0 rounded ms-7 p-2' placeholder='First Name'/>
                          <input className='outline-none border-0 rounded ms-[78px] lg:ms-17 xl:ms-4 p-2 mt-4 xl:mt-0' placeholder='Last Name'/>
                      </div>
                     
                      <div className='my-7 w-full'>
                          <label className='text-white font-medium' htmlFor="email">Email *</label>
                          <input className='outline-none border-0 rounded ms-7 p-2 w-3/5  xl:w-4/5' placeholder='Your Email'/>
                      </div>

                      <div>
                          <label className='text-white font-medium' htmlFor="email">Mobile *</label>
                          <input className='outline-none border-0 rounded ms-4 p-2' placeholder='Number'/>
                      </div>

                      <div className='mt-7'>
                          <label className='text-white font-medium' htmlFor="email">Accept *</label>
                          <input type='radio' className='outline-none border-0 rounded ms-4 p-2' placeholder='Number'/>
                          <label className='text-gray-400 ms-4' htmlFor="email">Terms</label>
                      </div>

                      <button className='font-bold bg-white px-5 py-2 ms-20 rounded mt-7 '>Sign Up</button>
                </div>

            </div>
        </div>

        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 '>
            <img className='w-full h-full' src={PlaceHolderImg} alt="" />
        </div>
    </div>
  )
}

export default SignUp ;