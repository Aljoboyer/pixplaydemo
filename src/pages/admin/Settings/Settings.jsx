import React, { useEffect, useRef } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {  setSettingsCurrentTab } from '../../../redux/slices/commonSlice';
import PersonalSection from '../../../components/admin/settings/PersonalSection';
import { Link , Element } from 'react-scroll';
import SettingsHeader from '../../../components/common/Headers/SettingsHeader';

const Settings = () => {
  const dispatch = useDispatch();
  const contactRef = useRef(null);

  useEffect(() => {
    dispatch(setSettingsCurrentTab(''))
  },[]);

  const scrollToRef = (scrollItem) => {
		
    if(scrollItem == 'Developer'){
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
	};

  return (
   <Layout>
       <SettingsHeader scrollHandler={scrollToRef} /> 
     {/* <div className='w-full p-4 md:p-6 2xl:p-10'>
       <PersonalSection/>
       <PersonalSection/>
        <section ref={contactRef}>
        <PersonalSection/>
        </section>
     </div>  */}
   </Layout>
  )
}

export default Settings;