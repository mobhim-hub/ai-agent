import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import AppRouter from './router/AppRouter'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import InterviewScreen from './components/InterviewScreen'
import InterviewReport from './components/InterviewReport'

function App() {


  return (
    <Router>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview/new" element={<InterviewScreen />} />
          <Route path="/interview/:id/report" element={<InterviewReport />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
