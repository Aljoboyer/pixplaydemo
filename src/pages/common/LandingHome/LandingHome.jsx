import React from 'react'
import LandingNavBar from '../../../components/common/LandingNavBar';
import LandingHeader from './LandingHeader';

 const LandingHome = () => {
  return (
    <div className='w-full landing_home_main_container h-fit '>
      <LandingNavBar/>
      <LandingHeader/>
    </div>
  )
}

export default LandingHome;
