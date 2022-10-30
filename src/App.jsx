import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/about/About'
import Events from './pages/events/Events'
import Shop from './pages/Shop'
import Volunteer from './pages/volunteer/Volunteer'
import NoPage from './pages/Nopage'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="shop" element={<Shop />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  )
}

export default App
