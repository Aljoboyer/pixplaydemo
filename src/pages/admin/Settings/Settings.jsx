import React, { useEffect, useRef } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {  setSettingsCurrentTab } from '../../../redux/slices/commonSlice';
import PersonalSection from '../../../components/admin/settings/PersonalSection';

const Settings = () => {
  const dispatch = useDispatch();
  const contactRef = useRef(null);

  useEffect(() => {
    dispatch(setSettingsCurrentTab('personal'))
  },[]);

  // const scrollToRef = (scrollItem) => {
		
  //   if(scrollItem == 'Developer'){
  //     contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
	// };

  const settingsTabName = useSelector((state) => state.commonstore.settingsCurrentTab);
  return (
   <Layout>
      { settingsTabName == 'personal' ?  <PersonalSection/> : <h1 className='text-center font-bold text-3xl'>Coming Soon</h1>}
   </Layout>
  )
}

export default Settings;