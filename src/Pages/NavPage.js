import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import hawk_logo from '../Assets/images/logo.png'
import { NAV_ITEM_LIST, NAV_PAGE_IMAGES } from '../Assets/data'
import { useNavigate } from 'react-router-dom'

const XEN_EASE = [0.76, 0, 0.24, 1]

/* Slide in from right */
const overlayVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.65, ease: XEN_EASE } },
    exit: { x: '100%', transition: { duration: 0.55, ease: XEN_EASE } },
}

/* Staggered nav links */
const linksContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const linkItemVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.55, ease: XEN_EASE } },
    exit: { x: -40, opacity: 0, transition: { duration: 0.3 } },
}

/* Image fade */
const imageVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 1.03, transition: { duration: 0.4 } },
}

const ALL_NAV = [...NAV_ITEM_LIST, { name: 'admin' }]

const NavPage = ({ setter }) => {
    const [imgIdx, setImgIdx] = useState(0)
    const navigate = useNavigate()

    /* Cycle background images every 2.5 s */
    useEffect(() => {
        const t = setInterval(() => {
            setImgIdx((i) => (i + 1) % NAV_PAGE_IMAGES.length)
        }, 2500)
        return () => clearInterval(t)
    }, [])

    const handleNavClick = (name) => {
        navigate(name === 'home' ? '/' : `/${name}`)
        setter(false)
    }

    return (
        <AnimatePresence>
            <motion.div
                className="nav-container"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="flex h-screen">
                    {/* ── Left image panel (desktop only) ── */}
                    <div className="hidden md:block relative w-[45%] overflow-hidden flex-shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={imgIdx}
                                src={NAV_PAGE_IMAGES[imgIdx]}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            />
                        </AnimatePresence>
                        {/* subtle dark overlay */}
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* ── Right links panel ── */}
                    <div className="relative flex-1 flex flex-col">
                        {/* Header row */}
                        <div className="nav-header">
                            <img src={hawk_logo} alt="Hawk" className="logo-img" />
                            <motion.svg
                                onClick={() => setter(false)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={0.8}
                                stroke="currentColor"
                                className="nav-close"
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </motion.svg>
                        </div>

                        {/* Links */}
                        <motion.ul
                            className="nav-link-container"
                            variants={linksContainerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {ALL_NAV.map((el) => (
                                <motion.li
                                    key={el.name}
                                    className="nav-link"
                                    variants={linkItemVariants}
                                    onClick={() => handleNavClick(el.name)}
                                    data-hover
                                >
                                    {el.name}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Social links at bottom */}
                        <motion.div
                            className="absolute bottom-8 left-[clamp(2rem,8vw,6rem)] flex gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            {['Instagram', 'Facebook', 'Vimeo', 'Behance'].map((s) => (
                                <span
                                    key={s}
                                    className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-yellow-2 transition-colors duration-300"
                                    data-hover
                                >
                                    {s}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default NavPage
