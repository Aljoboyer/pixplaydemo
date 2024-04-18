import React from 'react'
import PlaceHolderImg from '../../../../assets/image/placeholder-image.webp';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-fit lg:h-screen landing_home_main_container xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col '>
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
            <div className='flex flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-7'>
            <h4 onClick={() => navigate('/')}  className='text-white font-bold text-3xl italic cursor-pointer'>PixPlay</h4>
               <h4 onClick={() => navigate('/sign-up')} className='text-white  text-2xl  cursor-pointer'>SIGN UP</h4>
            </div>

           <div className='px-4 md:px-10 lg:px-24 pt-11'>
              <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic mt-11'>Your brand, our innovation-a perfect match <br /> in the digital revolation!</h4>

                 <div className='bg-black p-4 mt-7 rounded-lg '>
                      <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic '>Login</h4>

                      <div className='mt-4'>
                          <label className='text-white font-medium' htmlFor="email">Email *</label>
                          <input className='outline-none border-0 rounded ms-7 p-2' placeholder='Email'/>
                          <input type='password' className='outline-none border-0 rounded ms-[78px] lg:ms-17 xl:ms-4 p-2 mt-4 lg:mt-4 xl:mt-0' placeholder='Password'/>
                      </div>
                      
                     <div className='flex flex-row justify-center my-4   xl:w-[500px]  xl:ms-11'>
                        <p className='text-white font-medium  w-[35px]'>OR</p>
                     </div>
                      
                      <div>
                          <label className='text-white font-medium' htmlFor="email">Mobile *</label>
                          <input className='outline-none border-0 rounded ms-4 p-2' placeholder='Number'/>
                          <input className='outline-none border-0 rounded ms-[78px] lg:ms-17 xl:ms-4 p-2 mt-4 lg:mt-4 xl:mt-0' placeholder='OTP'/>
                      </div>

                      <button className='font-bold bg-white px-5 py-2 ms-20 rounded mt-7 '>Login</button>
                </div>

            </div>
        </div>

        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 '>
            <img className='w-full h-full' src={PlaceHolderImg} alt="" />
        </div>
    </div>
  )
}

export default Login ;