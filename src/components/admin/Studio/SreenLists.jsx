import React from 'react'
import ScreenUngroupTable from './ScreenUngroupTable';
import ScreenGroupTable from './ScreenGroupTable';

const SreenLists = () => {

  return (
<div className='z-0 min-h-screen'>
        <ScreenUngroupTable />
        {
            [1,2,3]?.map((item) => (
                <ScreenGroupTable/>
            ))
        }
  </div>
  )
}

export default SreenLists;