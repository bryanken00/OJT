import React from 'react'
import RootLayout from './shared/components/Layouts/RootLayout'
import { Routes, Route } from 'react-router-dom' 
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import CarsPage from './pages/Cars'

const App = () => {


  return (
    <div className='App'>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage />} />
        </Routes>
      </RootLayout>
    </div>
  )
}

export default App
