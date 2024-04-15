import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/common/Home";

function App() {

  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
