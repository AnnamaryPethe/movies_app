import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import SearchMovie from './components/SearchMovie/SearchMovie'
import Home from './components/Home'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchMovie />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
