import React from 'react';
import { FaBars } from "react-icons/fa";

const SidebarToggleButton = ({ sidebarOpen, onClick }) => {
	return (
		<button
			type="button"
			aria-controls="sidebar"
			onClick={onClick}
			className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
		>
			
			<FaBars size={30} color='#1199EE' />
		</button>
	);
};

export default SidebarToggleButton;
