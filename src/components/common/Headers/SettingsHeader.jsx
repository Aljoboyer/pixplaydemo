import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarToggleButton from '../Layouts/LayoutSidebar/SidebarToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsCurrentTab, setSidebarOpen } from '../../../redux/slices/commonSlice';
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { useUserDataQuery } from '../../../redux/features/userApi';

const SettingsHeader = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const settingsTabName = useSelector((state) => state.commonstore.settingsCurrentTab);
	const sidebarOpen = useSelector((state) => state.commonstore.sidebarOpen);

	const accessToken = localStorage.getItem('pixplayToken')
	const credentials = {accessToken: accessToken}
	const {data: userProfile, refetch} = useUserDataQuery(credentials, {
		refetchOnMountOrArgChange: true,
	  });
	
	
	useEffect(() => {
		refetch()
	},[])

	const handleSidebarToggle = (e) => {
		e.stopPropagation();
		// props.setSidebarOpen(!props.sidebarOpen);
		dispatch(setSidebarOpen(!sidebarOpen))
	};
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<header className="sticky top-0 z-999 flex w-full  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none  border-b-2 border-gray-400 bg-white">
			<div className="w-full flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
				<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
					<SidebarToggleButton
						sidebarOpen={sidebarOpen}
						onClick={(e) => handleSidebarToggle(e)}
					/>
				</div>
				<div className="overflow-x-auto whitespace-no-wrap lg:overflow-x-none">
					<div className="inline-flex  mx-2">
						<div className="ms-2">
							<button 
							onClick={() => dispatch(setSettingsCurrentTab('personal'))}
							className={` font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${settingsTabName == 'personal' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Personal</button>
						</div>

						<div className="mx-4">
							<button
							onClick={() => dispatch(setSettingsCurrentTab('brand'))}
							className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${settingsTabName == 'brand' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Brand</button>
						</div>

						<div className="">
							<button
							onClick={() => dispatch(setSettingsCurrentTab('Organsation'))}
							className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${settingsTabName == 'Organsation' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Organsation</button>
						</div>

						<div className="mx-4">
							<button
							onClick={() => dispatch(setSettingsCurrentTab('Team'))}
							className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${settingsTabName == 'Team' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Team</button>
						</div>
					</div>
				</div>
                <div className='ms-auto'>
                	<IoNotifications color='#1199EE' size={40}/>
                </div>

				<div className='ms-2'>
					<button onClick={() => setDropdownOpen(!dropdownOpen)} className='bg-gray-200 px-4 py-2 rounded flex flex-row items-center'>
					<p className='font-bold text-base md:text-xl'>{userProfile?.data?.merchant?.firstName}</p> 
						<CgProfile size={28} className='mx-2' />
						<IoMdArrowDropdown size={20}/>
					</button> 
				</div>
				
				<div className="flex items-center gap-3 2xsm:gap-7">
					<div className="relative">
						<div
							className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
								}`}
						>
							<p
								onClick={() => {
									localStorage.removeItem('token');
									navigate('/')
								}}
								className="cursor-pointer flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
							>
							<IoMdLogOut color='black' size={20}/>
								Logout
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default SettingsHeader;
