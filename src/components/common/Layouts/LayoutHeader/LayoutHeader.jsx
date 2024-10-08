import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarToggleButton from '../LayoutSidebar/SidebarToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOpen } from '../../../../redux/slices/commonSlice';
import { IoNotifications } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useUserDataQuery } from '../../../../redux/features/userApi';

const LayoutHeader = (props) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const accessToken = localStorage.getItem('pixplayToken')
	const credentials = {accessToken: accessToken}
	const {data: userProfile, refetch} = useUserDataQuery(credentials, {
		refetchOnMountOrArgChange: true,
	  });
	
	// console.log('userProfile Header ====>', userProfile)
	
	useEffect(() => {
		refetch()
	},[])
	
	const sidebarOpen = useSelector((state) => state.commonstore.sidebarOpen);

	const handleSidebarToggle = (e) => {
		e.stopPropagation();
		// props.setSidebarOpen(!props.sidebarOpen);
		dispatch(setSidebarOpen(!sidebarOpen))
	};
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<header className="sticky top-0 z-10 flex w-full  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none  border-b-2 border-gray-400 bg-white">
			<div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
				<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
					<SidebarToggleButton
						sidebarOpen={props.sidebarOpen}
						onClick={(e) => handleSidebarToggle(e)}
					/>
				</div>
					<div className='ms-auto' >
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
									localStorage.removeItem('pixplayToken');
									navigate('/')
								}}
								className="cursor-pointer flex items-center gap-3.5 py-2 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
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

export default LayoutHeader;
