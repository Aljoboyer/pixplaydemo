import React from 'react'

const BottomTab = ({tabData, currentTab, setCurrentTab}) => {
  return (
    <div className='w-full  sticky bottom-0 z-999 bg-white  py-4 px-4 border border-t-2 border-gray-200'>
    <div className="overflow-x-auto whitespace-no-wrap lg:overflow-x-none">
      <div className="inline-flex  mx-2">
            {
                tabData?.map((tab, index) => (
                    <div className={index !== 0 && 'ms-4'}>
                        <button 
                        onClick={() => setCurrentTab(tab)}
                        className={` font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${currentTab == tab ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>{tab}</button>
                    </div>
                ))
            }
      </div>
    </div>
</div>
  )
}

export default BottomTab;