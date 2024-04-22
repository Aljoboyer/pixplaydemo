import React, { useEffect } from 'react'
import Layout from '../../../components/common/Layouts/Layout';
import { useDispatch } from 'react-redux';

const AdminHome = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className='z-1'>AdminHome</div>
    </Layout>
  )
}

export default AdminHome;