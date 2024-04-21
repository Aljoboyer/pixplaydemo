import React from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '../../../redux/slices/commonSlice';

const Settings = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.commonstore.count);

  return (
   <Layout>
        <h1 onClick={() => dispatch(increaseCount(1))}>Settings</h1>
        <h1 className='text-5xl font-bold'>{count}</h1>
   </Layout>
  )
}

export default Settings;