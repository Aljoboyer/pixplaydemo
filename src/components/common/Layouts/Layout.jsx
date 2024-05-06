import { useEffect, useState } from 'react';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutSidebar from './LayoutSidebar/LayoutSidebar';
import SettingsHeader from '../Headers/SettingsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOpen } from '../../../redux/slices/commonSlice';
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {

	// const [sidebarOpen, setSidebarOpen] = useState(false);
	const navigate = useNavigate()
	const location = useLocation();
	const { pathname } = location;
	const dispatch = useDispatch()
	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if(!token){
	// 		navigate('/')
	// 	}
	//   }, []);

	// console.log('Pathname =', pathname)

	const sidebarOpen = useSelector((state) => state.commonstore.sidebarOpen);


	const setSidebarOpenHandler = (sidebarShow) => {
		dispatch(setSidebarOpen(sidebarShow))
	}
	
	return (
		<div className="">
			<div className="flex h-screen overflow-hidden">
				<LayoutSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpenHandler} />

				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					{
						pathname == '/dashboard/settings' ? <SettingsHeader/> : <LayoutHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> 
					}
					
					
					<main className=''>
						<div className={`mx-auto max-w-screen-2xl px-4 pt-4 md:px-6 md:pt-4 2xl:px-10 2xl:pt-10 `}>
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
