import React, { useState } from 'react'
import PlaceHolderImg from '../../../../assets/image/placeholder-image.webp';
import { useNavigate } from 'react-router-dom';
import { nameRegex, passwordRegex } from '../../../../helper/regexData';

const SignUp = () => {
    const navigate = useNavigate()
    const [signUpData, setSignUpData] = useState({
        firstName: '', lastName: '',
        email: '', company: '', password: '', reEnterPassword: '',
    })
   const [nameErr, setNameErr] = useState('')
   const [emailErr, setEmailErr] = useState('')
   const [passwordErr, setPasswordErr] = useState('')
    
   const validatehandler = () => {
    let isValid  = true;

    if(!signUpData?.firstName || !signUpData?.lastName){
        setSignUpErr({nameErr: 'First name and Last name both required'})
        isValid = false
    }

    if(!signUpData?.email || !loginData?.email.match(/\S+@\S+\.\S+/)){
        setSignUpErr({emailErr: 'Please input a valid email'})
        isValid = false
    }

    if(!signUpData?.password && !signUpData?.reEnterPassword){
        setSignUpErr({...signUpErr, passwordErr: 'Password is required'})
        isValid = false
    }
    if(!passwordRegex.test(signUpData?.password) || !passwordRegex.test(signUpData?.reEnterPassword)){
        setSignUpErr({...signUpErr, passwordErr: 'Password must be minimum 8th character long with one lowercase , uppercase letters, At least one Number & one special character'})
        isValid = false
    }
    if(signUpData?.password !== signUpData?.reEnterPassword){
        setSignUpErr({...signUpErr, passwordErr: 'Password should match with re-enter password'})
        isValid = false
    }

    if (nameRegex.test(signUpData?.firstName) === false || nameRegex.test(signUpData?.lastName) === false  || signUpData?.firstName.trim().length === 0 || signUpData?.lastName.trim().length === 0) {
        setSignUpErr({...signUpErr, nameErr: 'Please write proper name without special character and number'})
        isValid = false
    }
    if(isValid){
        signUpHandler()
    }
   }

   const signUpHandler = () => {
    console.log('validation success')
    // navigate('/dashboard/admin-home')
  }

  return (
    <div className='w-full h-fit xl:h-screen landing_home_main_container lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col '>
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
            <div className='flex flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-7'>
               <h4 onClick={() => navigate('/')}  className='text-white font-bold text-3xl italic cursor-pointer'>PixPlay</h4>
               <h4 onClick={() => navigate('/login')} className='text-white  text-2xl  cursor-pointer'>LOGIN</h4>
            </div>

           <div className='px-4 md:px-10 lg:px-24 pt-7'>
              <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic mt-7'>Your brand, our innovation-a perfect match in the digital revolation!</h4>

                 <div className='bg-black p-4 mt-7 rounded-lg'>
                      <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic '>Details</h4>

                      <div className='mt-7'>
                          <label className='text-white font-medium block md:inline' htmlFor="email">Name *</label>
                          <input 
                          onChange={(e) => {
                            setSignUpData({...signUpData, firstName: e.target.value})
                            setSignUpErr({...signUpErr, nameErr: ''})
                          }}
                          className='outline-none border-0 rounded ms-0 md:ms-14 p-2 w-full md:w-fit mt-2 md:mt-0 lg:w-2/6' placeholder='First Name'/>
                          <input
                           onChange={(e) => {
                            setSignUpData({...signUpData, lastName: e.target.value})
                            setSignUpErr({...signUpErr, nameErr: ''})
                          }}
                          className='outline-none border-0 rounded ms-0 md:ms-2 lg:ms-17 xl:ms-4 p-2 mt-4 xl:mt-0 w-full md:w-fit lg:w-2/6' placeholder='Last Name'/>

                          {
                        signUpErr?.nameErr && <div className=' mt-4 ms-14'>
                       <p className='text-sm font-bold text-red-500 ms-0 md:ms-11  text-start'>{signUpErr?.nameErr}</p>
                       </div> 
                       }

                      </div>
                     
                      <div className='my-7 w-full'>
                          <label className='text-white font-medium block md:inline' htmlFor="email">Email *</label>
                          <input className='outline-none border-0 rounded ms-0 md:ms-14 p-2 w-full mt-2 md:mt-0 md:w-4/6 lg:w-1/2  xl:w-3/4' placeholder='Your Email'/>
                          {
                        signUpErr?.emailErr && <div className=' mt-4 ms-14'>
                       <p className='text-sm font-bold text-red-500 ms-11  text-start'>{signUpErr?.emailErr}</p>
                       </div> 
                       }

                      </div>

                      <div className='mt-7'>
                          <label className='text-white font-medium block md:inline' htmlFor="email">Password *</label>
                          <input 
                          
                          className='outline-none border-0 rounded ms-0 md:ms-7 mt-2 md:mt-0 p-2 w-full md:w-fit lg:w-2/6' placeholder='Enter new password'/>
                          <input
                           
                          className='outline-none border-0 rounded ms-0 md:ms-2 lg:ms-17 xl:ms-4 p-2 mt-4 xl:mt-0 w-full md:w-fit lg:w-2/6' placeholder='Re-enter your password'/>

                          {
                        signUpErr?.passwordErr && <div className=' mt-4 ms-14'>
                       <p className='text-sm font-bold text-red-500 ms-11  text-start'>{signUpErr?.passwordErr}</p>
                       </div> 
                       }

                      </div>

                      <div className='mt-7'>
                          <label className='text-white font-medium  block md:inline' htmlFor="email">Company *</label>
                          <input className='outline-none border-0 rounded ms-0 md:ms-6 mt-2 md:mt-0 w-full md:w-fit p-2' placeholder='Your company name'/>
                      </div>

                      <div className='mt-7'>
                          <label className='text-white font-medium' htmlFor="email">Accept *</label>
                          <input type='radio' className='outline-none border-0 rounded ms-11 p-2' placeholder='Number'/>
                          <label className='text-gray-400 ms-4' htmlFor="email">Terms</label>
                      </div>

                      <button onClick={validatehandler} className='font-bold bg-white px-5 py-2 ms-24 rounded mt-7 '>Sign Up</button>
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