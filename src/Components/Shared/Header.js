import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import hawk_logo from '../../Assets/images/logo.png'
import '../../Assets/styles/header.css'
import NavPage from '../../Pages/NavPage'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>
            <div className="header-container">
                <img src={hawk_logo} alt="Hawk" className="logo-img" />

                {/* Hamburger — morphs on click */}
                <motion.svg
                    onClick={() => setIsNavOpen(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="nav-open"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    data-hover
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </motion.svg>
            </div>

            {/* Nav overlay with exit animation */}
            <AnimatePresence>
                {isNavOpen && <NavPage setter={setIsNavOpen} />}
            </AnimatePresence>
        </>
    )
}

export default Header
