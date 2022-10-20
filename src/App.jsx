import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/about/About'
import Events from './pages/Events'
import NoPage from './pages/Nopage'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  )
}

export default App
