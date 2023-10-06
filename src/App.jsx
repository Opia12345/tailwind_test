import { useState } from 'react'
import '../distr/output.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './Components/Navigation'

function App() {

  return (
    <>
    <Navigation />
    <Home />
    </>
  )
}

export default App
