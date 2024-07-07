import React from 'react'
import ScreenUngroupTable from './ScreenUngroupTable';
import ScreenGroupTable from './ScreenGroupTable';

const SreenLists = ({toggleAddScreenModal}) => {

  return (
<div className='z-0 min-h-screen'>
        <ScreenUngroupTable />
        {
            [1,2,3]?.map((item) => (
                <ScreenGroupTable toggleAddScreenModal={toggleAddScreenModal}/>
            ))
        }
  </div>
  )
}

export default SreenLists;