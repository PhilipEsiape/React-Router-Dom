import React from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
  <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
  </Router>

  )
}

export default App;