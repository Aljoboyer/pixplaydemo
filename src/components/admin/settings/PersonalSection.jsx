import React, { useEffect, useState } from 'react'
import SettingsVector from '../../../assets/image/settingsVector.jpg';
import ImageUpload from '../../common/ImageUpload/ImageUpload';
import { MultiSelect } from '../../common/MultiSelect/MultiSelect';
import { nameRegex, passwordRegex } from '../../../helper/regexData';
import { useGetDepartmentQuery, useProfileUpdateMutation, useUpdatePasswordMutation, useUserDataQuery } from '../../../redux/features/userApi';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

const PersonalSection = () => {  
    const accessToken = localStorage.getItem('pixplayToken')
    const [selectedDepartement, setSelectedDepartment] = useState([])
    const [newPassword, setNewPassword] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState('');
    const [passwordUpdate, { }] = useUpdatePasswordMutation();
    const [profileData, setProfileData] = useState({
        firstName: '', lastName: '',
        mobile: '',
    })
    const [nameErr, setNameErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(false)

    const credentials = {accessToken: accessToken}
	const {data: userProfile, refetch} = useUserDataQuery(credentials, {
		refetchOnMountOrArgChange: true,
	  });
    const decodedToken = jwtDecode(accessToken);
    const [updateProfile, { }] = useProfileUpdateMutation();
    const {data: departmentData} = useGetDepartmentQuery(credentials, {
		refetchOnMountOrArgChange: true,
	  });
    const [departmentOptions, setDepartmentOptions] = useState([]);

    useEffect(() => {
        if(userProfile?.data){
          setProfileData({...userProfile?.data?.merchant})
        }
      },[userProfile])

    const passwordSaveHandler = async () => {
        let isValid = true
        if(!newPassword || !oldPassword){
            setPasswordErr('New Password & Old Password is required')
            isValid = false
            return
        }
        if(newPassword == oldPassword){
            setPasswordErr('New Password & Old Password cannot be same')
            isValid = false
            return
        }
        if(!passwordRegex.test(newPassword) || !passwordRegex.test(oldPassword)){
            setPasswordErr( 'Password must be minimum 8th character long with one lowercase , uppercase letters, At least one Number & one special character')
            isValid = false
            return
        }
        if(isValid){
            setPasswordLoading(true)
            const requestObj = { password: {newPassword: newPassword, oldPassword: oldPassword}, accessToken}
            const response = await passwordUpdate(requestObj)

            if(response?.data?.success == 1){
                toast.success('password updated successfully', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    onOpen: () => {
                        setPasswordLoading(false)
                        setNewPassword('')
                        setOldPassword('')
                    },
                    onClose: () => {
                    },
                    });
            }
            else if(response?.data?.data == "Password is wrong or invalid!"){
                setPasswordLoading(false)
                setPasswordErr("Old Password is wrong")
            }
            else {
                setPasswordLoading(false)
            }
            console.log('Response ==>', response)
        }
    }

    const profileDataSaveHandler = async () => {
        let isValid  = true;
    
        if(!profileData?.firstName || !profileData?.lastName){
            setNameErr('First name and Last name both required')
            isValid = false
        }
        if (nameRegex.test(profileData?.firstName) === false || nameRegex.test(profileData?.lastName) === false  || profileData?.firstName.trim().length === 0 || profileData?.lastName.trim().length === 0) {
            setNameErr('Please write proper name without special character and number')
            isValid = false
        }
       
        if (!(/^\d+$/).test(profileData.mobile)) {
            setPhoneErr('Please input a valid phone number')
            isValid = false
          }
        if (profileData.mobile?.length !== 10) {
        setPhoneErr('Please input a 10 digit phone number')
        isValid = false
        return;
        }
        if(isValid){
            const departmentIdArray = selectedDepartement?.map((item) => {
                const obj = {departmentId: item?.value}
                return obj
            })
            setProfileLoading(true)

            const requestObj = {data: {merchant: profileData,  departments: departmentIdArray}}
            console.log('Profile data ===>', requestObj)

            const updateResponse = await updateProfile({requestObj, accessToken})

            if(updateResponse?.data?.success == 1){
                toast.success('Merchant profile updated successfully!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    onOpen: () => {
                        setProfileLoading(false)
                    },
                    onClose: () => {
                    },
                    });
            }
            else{
              setOrgLoading(false)
            }

            console.log('Profile updateResponse ===>', updateResponse)
        }
       }
    
    useEffect(() => {
        if(departmentData?.data?.length > 0){
            const formateDept = departmentData?.data?.map((item) => {
                const formatObj = {
                    label: item?.departmentName,
                    value: item?.departmentID
                }
                return formatObj
            })
        setDepartmentOptions(formateDept)
        }
    },[departmentData?.data])

    useEffect(() => {
        if(userProfile?.data?.departments?.length > 0){
            const formateDept = userProfile?.data?.departments?.map((item) => {
                const formatObj = {
                    label: item?.departmentName,
                    value: item?.departmentId
                }
                return formatObj
            })
         setSelectedDepartment(formateDept)
        }
    },[userProfile?.data?.departments])

    // console.log(selectedDepartement)
    // console.log(decodedToken)

  return (
   <div   className='flex flex-row justify-evenly w-full'>
        <div className='w-full lg:w-1/2 bg-[#EBEEF0] p-4 rounded-md'>
            
              <div className='xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col mt-4 justify-center'>
                  <div>
                      <h1 className='text-xl md:text-2x lg:text-3xl font-bold text-start'>Details</h1>
                     <div className='mt-4'>
                      <ImageUpload/>
                        <h1 className='text-xl font-bold'>@admin</h1>
                     </div>
                  </div>

                  <div>
                      <div className='mt-2 lg:mt-11 ms-0 lg:ms-4'>
                          <input 
                          defaultValue={profileData?.firstName}
                           onChange={(e) => {
                            setProfileData({...profileData, firstName: e.target.value})
                            setNameErr('')
                          }} className='w-[1/2] bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='First Name' type="text" />
                          <input
                           defaultValue={profileData?.lastName}
                          onChange={(e) => {
                            setProfileData({...profileData, lastName: e.target.value})
                            setNameErr('')
                          }}
                          className='w-[1/2] bg-[#DDDDDD] rounded-md px-4 py-2 ms-0 sm:ms-2 md:ms-4 mt-4 md:mt-0' placeholder='Last Name' type="text" />

                        {
                        nameErr && <div className=' mt-2 '>
                       <p className='text-[12px] font-bold text-red-500 '>{nameErr}</p>
                       </div> 
                       }
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4'>
                          <input
                            defaultValue={decodedToken?.email}
                          disabled
                          className='w-full bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='Your Email' type="text" />
                      </div>

                      <div className='mt-4 ms-0 lg:ms-4'>
                          <input 
                          defaultValue={profileData?.mobile}
                           onChange={(e) => {
                            setProfileData({...profileData, mobile: e.target.value})
                            setPhoneErr('')
                          }}
                          className='w-full bg-[#DDDDDD] rounded-md px-4 py-2' placeholder='Your Phone' type="text" />
                        {
                         phoneErr && <div className=' mt-2'>
                        <p className='text-[12px] font-bold text-red-500'>{phoneErr}</p>
                        </div> 
                        }
                      </div>

                     <div className='mt-4 ms-0 lg:ms-4'>
                         <MultiSelect
                          optionsData={departmentOptions || []}
                          selectedOptions={selectedDepartement}
                          setSelectedOptions={setSelectedDepartment}
                          label=""
                          placeholder="Select Department"
                         />
                      </div>

                      <div className='flex flex-row justify-center mt-4 ps-0 lg:ps-4 w-full'>
                        {
                            profileLoading ?  <button className='w-full  bg-black text-white font-bold py-2 rounded-md'>Loading...</button> 
                            :  <button onClick={profileDataSaveHandler} className='w-full  bg-black text-white font-bold py-2 rounded-md cursor-pointer'>SAVE</button>
                        }
                      </div>
                  </div>
              </div>
          
            <div className='mt-4 pb-2'>
                <h1 className='text-xl md:text-2x lg:text-3xl font-bold text-start'>Security</h1>
                <div className='mt-4  w-full xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col'>
                   <div className='w-full lg:w-1/2'>
                        <p className='font-bold '>Old Password</p>
                        <input value={oldPassword} type='password' onChange={(e) => {
                            setOldPassword(e.target.value)
                            setPasswordErr('')
                        }} className='w-full bg-[#DDDDDD] rounded-md px-4 py-2 mt-2' placeholder='Enter old password'/>
                   </div>
                   <div className='w-full lg:w-1/2 ms-0 lg:ms-2 mt-4 lg:mt-0'>
                        <p className='font-bold '>New Password</p>
                        <input value={newPassword} type='password' onChange={(e) => {
                            setNewPassword(e.target.value)
                            setPasswordErr('')
                        }} className='w-full bg-[#DDDDDD] rounded-md px-4 py-2 mt-2' placeholder='Enter new password'  />
                   </div>
                </div>
                {
                passwordErr && <div className=' mt-2 '>
                <p className='text-[12px] font-bold text-red-500 text-center'>{passwordErr}</p>
                </div> 
                }
                <div className='flex flex-row justify-center mt-4  w-full'>
                    {
                        passwordLoading ?  <button className='w-full  bg-black text-white font-bold py-2 rounded-md'>Loading...</button> 
                        : <button onClick={() => passwordSaveHandler()} className='w-full  bg-black text-white font-bold py-2 rounded-md'>SAVE</button>
                    }
                </div>
            </div>
        </div>

        <div className='hidden lg:block w-full lg:w-1/2'>
            <img className='w-full ' src={SettingsVector} alt="" />
        </div>
   </div>
  )
}

export default PersonalSection;
