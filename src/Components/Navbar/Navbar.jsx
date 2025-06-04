import React from 'react'
import logo from '../Assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className="nav-logo" />
    </div>
  )
}

export default Navbar