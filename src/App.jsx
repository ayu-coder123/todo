import React from 'react'
import Home from './Home'
import './App.css'
import About from './About'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'

export default function App() {
  return (
   <>
 <Navbar/>
 <Routes>
  <Route index path='/' Component={Home}/>
  <Route path='/about' Component={About}/>
  <Route path='/contact' Component={Contact}/>
 </Routes>
   </>
  )
}
