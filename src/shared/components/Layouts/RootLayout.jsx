import React from 'react'
import Header from  '../Partials/Header'
import Footer from '../Partials/Footer'
import { Link } from 'react-router-dom'

const RootLayout = ({children}) => {


  return (
    <div className='RootLayout'>

      <Link to="/">HomePage</Link>
      <Link to="/about">AboutPage</Link>
      <Link to="/cars">CarsPage</Link>

      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
