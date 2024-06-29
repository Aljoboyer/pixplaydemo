import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingHome from './pages/common/LandingHome/LandingHome';
import './App.css'
import Login from './pages/common/Auth/Login/Login';
import SignUp from './pages/common/Auth/SignUp/SignUp';
import AdminHome from './pages/admin/AdminHome/AdminHome';
import Settings from './pages/admin/Settings/Settings';
import Media from './pages/admin/Media/Media';
import Studio from './pages/admin/Studio/Studio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/common/Auth/ForgotPassword/ForgotPassword';
import PlaylistPreview from './components/admin/Studio/PlaylistPreview';
import PlaylistCreateOptions from './pages/admin/Studio/PlaylistCreateOptions';
import CreatePlaylist from './pages/admin/Studio/CreatePlaylist';

function App() {

  return (
    <main className="w-full">
       <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard/admin-home" element={<AdminHome />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/Media" element={<Media />} />
          <Route path="/dashboard/Studio" element={<Studio />} />
          <Route path="/dashboard/PlaylistPreview" element={<PlaylistPreview />} />
          <Route path="/dashboard/PlaylistCreateOptions" element={<PlaylistCreateOptions />} />
          {/* <Route path="/dashboard/CreatePlaylist" element={<CreatePlaylist />} /> */}
        </Routes>
      </Router>
    </main>
  )
}

export default App
