import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingHome from './pages/common/LandingHome/LandingHome';
import './App.css'
import Login from './pages/common/Auth/Login/Login';
import SignUp from './pages/common/Auth/SignUp/SignUp';
import AdminHome from './pages/admin/AdminHome/AdminHome';

function App() {

  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          
        </Routes>
      </Router>
    </main>
  )
}

export default App
