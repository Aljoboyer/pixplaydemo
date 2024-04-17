import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingHome from './pages/common/LandingHome/LandingHome';
import './App.css'

function App() {

  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
