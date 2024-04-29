import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import SidebarToggleButton from '../Layouts/LayoutSidebar/SidebarToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsCurrentTab, setSidebarOpen } from '../../../redux/slices/commonSlice';

const SettingsHeader = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const settingsTabName = useSelector((state) => state.commonstore.settingsCurrentTab);
	const sidebarOpen = useSelector((state) => state.commonstore.sidebarOpen);

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

						<div className="ms-2">
							<button
							onClick={() => dispatch(setSettingsCurrentTab('Subscription'))}
							className={`font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${settingsTabName == 'Subscription' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>Subscription</button>
						</div>

						<div className="mx-4">
							<button
							onClick={() => {
								dispatch(setSettingsCurrentTab('Developer'))
							}}
							className={`cursor-pointer font-bold px-2 md:px-4 text-sm md:text-base py-2 border border-1 border-[#0359d2] rounded ${settingsTabName == 'Developer' ? 'bg-[#1ED2FC] text-white' : 'text-[#0359d2]'}`}>
								Developer
							</button>
						</div>
					</div>
				</div>
                <div className='ms-auto' onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FaUserAlt color='#1199EE' size={30}/>
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
