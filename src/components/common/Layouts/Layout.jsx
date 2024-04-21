import { useEffect, useState } from 'react';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutSidebar from './LayoutSidebar/LayoutSidebar';
import SettingsHeader from '../Headers/SettingsHeader';
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {

	const [sidebarOpen, setSidebarOpen] = useState(false);
	const navigate = useNavigate()
	const location = useLocation();
	const { pathname } = location;

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if(!token){
	// 		navigate('/')
	// 	}
	//   }, []);

	// console.log('Pathname =', pathname)
	return (
		<div className="">
			<div className="flex h-screen overflow-hidden">
				<LayoutSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					{
						pathname == '/dashboard/admin-home' ? <SettingsHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> : <LayoutHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
					}
					
					
					<main>
						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
							{/* <ToastContainer/> */}
							{children}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Layout;
