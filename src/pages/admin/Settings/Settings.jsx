import React, { useEffect } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsCurrentTab } from '../../../redux/slices/commonSlice';
import PersonalSection from '../../../components/admin/settings/PersonalSection';
import { Link , Element } from 'react-scroll';

const Settings = () => {
  const dispatch = useDispatch();

  const settingsTabName = useSelector((state) => state.commonstore.settingsCurrentTab);

  useEffect(() => {
    dispatch(setSettingsCurrentTab(''))
  },[]);

  return (
   <Layout>
        <div className='z-1 w-full'>
            {/* <PersonalSection/>
            <PersonalSection/>
            <PersonalSection/> */}
        </div>
   </Layout>
  )
}

export default Settings;