import { useEffect, useState } from 'react';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutSidebar from './LayoutSidebar/LayoutSidebar';
import SettingsHeader from '../Headers/SettingsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { setPixplayHubPopUp, setSidebarOpen, setSupportPopUp } from '../../../redux/slices/commonSlice';
import SupportPopUp from '../../admin/support/SupportPopUp';
import PixplayHubpopUp from '../../admin/pixplayHub/PixplayHubpopUp';
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children , noTopPadding = false}) => {

	// const [sidebarOpen, setSidebarOpen] = useState(false);
	const navigate = useNavigate()
	const location = useLocation();
	const { pathname } = location;
	const dispatch = useDispatch()
	// useEffect(() => {
	// 	const token = localStorage.getItem('pixplayToken')
	// 	if(!token){
	// 		navigate('/login')
	// 	}
	//   }, []);

	// console.log('Pathname =', pathname)

	const sidebarOpen = useSelector((state) => state.commonstore.sidebarOpen);
	const supportPopUp = useSelector((state) => state.commonstore.supportPopUp);
	const pixplayHubPopUp = useSelector((state) => state.commonstore.pixplayHubPopUp);

	const setSidebarOpenHandler = (sidebarShow) => {
		dispatch(setSidebarOpen(sidebarShow))
	}
	
	const supportPopUpClose = () => {
		dispatch(setSupportPopUp(false))
	}

	const pixplayHubPopUpClose = () => {
		dispatch(setPixplayHubPopUp(false))
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
						<div className={`mx-auto max-w-screen-2xl px-4  md:px-6    ${noTopPadding ? '' : 'pt-4 md:pt-4 2xl:px-10 '}`}>
							{/* <ToastContainer/> */}
							{children}
						</div>
						<SupportPopUp  visible={supportPopUp} onClose={supportPopUpClose}/>
						<PixplayHubpopUp visible={pixplayHubPopUp} onClose={pixplayHubPopUpClose} />
					</main>
				</div>
			</div>
		</div>
	);
};

export default Layout;
