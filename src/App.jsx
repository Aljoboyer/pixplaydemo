import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingHome from './pages/common/LandingHome/LandingHome';
import './App.css'
import Login from './pages/common/Auth/Login/Login';

function App() {

  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
