import React, { useEffect, useRef } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {  setSettingsCurrentTab } from '../../../redux/slices/commonSlice';
import PersonalSection from '../../../components/admin/settings/PersonalSection';
import BrandSection from '../../../components/admin/settings/BrandSection';
import OrganisationSection from '../../../components/admin/settings/OrganisationSection';

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
      {/* { settingsTabName == 'personal' ?  <PersonalSection/> : settingsTabName == 'brand' ? <BrandSection /> : settingsTabName == 'Organsation' ? <OrganisationSection/> : <h1 className='text-center font-bold text-3xl'>Coming Soon</h1>} */}

      { settingsTabName == 'personal' ?  <PersonalSection/> : settingsTabName == 'brand' ? <BrandSection /> : <h1 className='text-center font-bold text-3xl'>Coming Soon</h1>}
      
   </Layout>
  )
}

export default Settings;