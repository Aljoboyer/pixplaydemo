import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PiDeviceMobileCameraFill } from "react-icons/pi";
import SidebarHeader from './SidebarHeader';
import { HiPencil } from "react-icons/hi2";
import { IoIosCloudy } from "react-icons/io";
import { LuBarChart } from "react-icons/lu";
import { FaCircleRadiation } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setPixplayHubPopUp, setSupportPopUp } from '../../../../redux/slices/commonSlice';
import { LiaLaptopSolid } from "react-icons/lia";
import { useUserDataQuery } from '../../../../redux/features/userApi';

const LayoutSidebar = ({ sidebarOpen, setSidebarOpen }) => {
	const location = useLocation();
	const { pathname } = location;

	const dispatch = useDispatch();

	const trigger = useRef(null);
	const sidebar = useRef(null);

	const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
	const [sidebarExpanded, setSidebarExpanded] = useState(
		storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
	);

	const handleButtonClick = (e, handleClick) => {
		e.preventDefault();
		if (sidebarExpanded) {
			handleClick();
		} else {
			setSidebarExpanded(true);
		}
	};

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return;
			if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
				return;
			setSidebarOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	}, [sidebarOpen]);

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	}, [sidebarOpen]);

	useEffect(() => {
		localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
		if (sidebarExpanded) {
			document.querySelector('body')?.classList.add('sidebar-expanded');
		} else {
			document.querySelector('body')?.classList.remove('sidebar-expanded');
		}
	}, [sidebarExpanded]);

	const supportPopUp = useSelector((state) => state.commonstore.supportPopUp);

	return (
		<aside
			ref={sidebar}
			className={`side_bar_style absolute left-0 top-0 z-10 flex h-screen w-72.5 flex-col overflow-y-hidden  duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
		>
			<SidebarHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} trigger={trigger} />

			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				<nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
					<div  className="mb-2 flex flex-col items-between  gap-1.5">
						<div>
							<NavLink
								to="/dashboard/Studio"
								className={`text-xl group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-blue-300 hover:text-blue-800 dark:hover:bg-meta-4 ${pathname.includes('/dashboard/Studio') && 'text-blue-800 bg-blue-300'
									}`}
							>
								<div className='reversed-icon '><HiPencil size={24}  color='white'  /></div>
								Studio
							</NavLink>
						</div>

						<div className='my-4'>
							<NavLink
								to="/dashboard/Media"
								className={`text-xl group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-blue-300 hover:text-blue-800 dark:hover:bg-meta-4 ${pathname.includes('/dashboard/Media') && 'text-blue-800 bg-blue-300'
									}`}
							>
								<IoIosCloudy size={24} color='white' />
								Media
							</NavLink>
						</div>
						
						<div>
							<NavLink
								to="/pixplay/admin-home"
								className={`text-xl group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-blue-300 hover:text-blue-800 dark:hover:bg-meta-4 ${pathname.includes('admin-home') && 'bg-graydark dark:bg-meta-4'
									}`}
							>
								<PiDeviceMobileCameraFill size={24} color='white' />
								Template
							</NavLink>
						</div>

						<div>
							<NavLink
								to="/pixplay/admin-home"
								className={`text-xl group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-blue-300 hover:text-blue-800 dark:hover:bg-meta-4 ${pathname.includes('admin-home') && 'bg-graydark dark:bg-meta-4'
									}`}
							>
								<LuBarChart size={24} color='white' />
								Analytics
							</NavLink>
						</div>

						<div className='mt-32'>
							<p
								// to="/pixplay/admin-home"
								onClick={() => dispatch(setSupportPopUp(true))}
								className={`cursor-pointer text-xl group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-blue-300 hover:text-blue-800 dark:hover:bg-meta-4 ${supportPopUp && ''
									}`}
							>
								<FaCircleRadiation size={24} color='white' />
								Support
							</p>
						</div>
						<div className='my-4'>
							<NavLink
								to="/dashboard/settings"
								className={`text-xl group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-blue-300 hover:text-blue-800 dark:hover:bg-meta-4 ${pathname.includes('/dashboard/settings') && 'text-blue-800 bg-blue-300'
									}`}
							>
								<IoPerson size={24} color='white' />
								Setting
							</NavLink>
						</div>
						
						<div className=''>
							<p
								// to="/pixplay/admin-home"
								onClick={() => dispatch(setPixplayHubPopUp(true))}
								className={`cursor-pointer text-lg group relative flex items-center gap-2.5 rounded-full py-2 px-4 font-medium bg-white `}
							>
								Pixplay Hub
								<LiaLaptopSolid size={24} color='#1199EE' />
							</p>
						</div>

					</div>
				</nav>
			</div>
		</aside>
	);
};

export default LayoutSidebar;
