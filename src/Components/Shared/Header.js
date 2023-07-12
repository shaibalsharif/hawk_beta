import React, { useState } from 'react'
import hawk_logo from '../../Assets/images/logo.png'
import '../../Assets/styles/header.css'
import NavPage from '../../Pages/NavPage'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className='header-container z-40'>

      <img src={hawk_logo} alt='logo' className='logo-img' />
      <svg
        onClick={(e) => {
          setIsNavOpen(true)
        }}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-open">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {isNavOpen ? <NavPage setter={setIsNavOpen} /> : <></>}

    </div>
  )
}

export default Header