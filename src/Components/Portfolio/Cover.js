import React from 'react'
import { motion } from 'framer-motion'

const XEN_EASE = [0.76, 0, 0.24, 1]

const Cover = ({ image, title, client, year, role }) => {
    return (
        <div className="sm:flex items-center sm:bg-dark-2 relative z-0 w-full">
            {/* Background image — clip-path reveal */}
            <motion.img
                src={image}
                className="object-cover w-full h-screen absolute top-0 left-0 sm:relative -z-10 sm:z-0 sm:w-full md:w-[50%]"
                initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1.06 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1 }}
                transition={{ duration: 1.2, ease: XEN_EASE }}
            />

            {/* Text side */}
            <div className="h-screen px-8 sm:w-full flex items-center bg-black bg-opacity-25">
                <div className="w-[80%] md:w-[75%] text-yellow-2 uppercase">
                    {/* Title */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div
                            className="text-[40px] sm:text-[55px] font-[700] leading-[60px]"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: XEN_EASE }}
                        >
                            {title}
                        </motion.div>
                    </div>

                    {/* Meta */}
                    <motion.div
                        className="text-xs sm:text-sm font-[500] flex justify-between pt-8 w-[80%] sm:w-[40%] md:w-[60%]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                    >
                        <p>Client: {client}</p>
                        <p>Year: {year}</p>
                        <p>Role: {role}</p>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-0 left-[50%] sm:left-[75%] transform -translate-x-1/2 sm:-translate-x-2/3 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    data-hover
                >
                    <motion.span
                        className="text-[10px] tracking-[0.3em]"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                        SCROLL
                    </motion.span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}

export default Cover
