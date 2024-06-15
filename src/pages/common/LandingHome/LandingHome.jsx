import React, { useEffect } from 'react'
import LandingNavBar from '../../../components/common/LandingNavBar';
import LandingHeader from './LandingHeader';
import { useNavigate } from 'react-router-dom';

 const LandingHome = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('pixplayToken')

  useEffect(() => {
    if(accessToken){
      navigate('/dashboard/admin-home')
    }
  },[accessToken])


  return (
    <div className='w-full landing_home_main_container h-fit '>
      <LandingNavBar/>
      <LandingHeader/>
    </div>
  )
}

export default LandingHome;
