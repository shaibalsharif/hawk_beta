import React from 'react'
import { motion } from 'framer-motion'
import { getPhotoUrl } from '../../Firebase/firebase_utils'

const XEN_EASE = [0.76, 0, 0.24, 1]

const Cover = ({ nextRef, coverData }) => {
    const handleScrollClick = () => {
        nextRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="sm:flex items-center sm:bg-dark-2 relative z-0">
            {/* Image with reveal */}
            <motion.img
                src={getPhotoUrl(coverData?.image?.type, coverData?.image?.url)}
                className="object-cover w-full h-screen absolute top-0 left-0 sm:relative -z-10 sm:z-0 sm:w-full"
                initial={{ clipPath: 'inset(0 0 100% 0)', scale: 1.08 }}
                animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
                transition={{ duration: 1.2, ease: XEN_EASE }}
            />

            <div className="h-screen px-8 sm:w-full flex items-center bg-black bg-opacity-25">
                <div className="md:w-[55%]">
                    {/* Main title */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div
                            className="text-[40px] sm:text-[55px] font-[700] leading-[60px] uppercase"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.75, delay: 0.4, ease: XEN_EASE }}
                        >
                            {coverData?.title}
                        </motion.div>
                    </div>

                    {/* Sub text */}
                    <motion.div
                        className="text-xs sm:text-sm font-[500] flex justify-between pt-8 w-[80%] sm:w-[40%]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
                    >
                        <p>{coverData?.sub}</p>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    className="absolute bottom-0 left-[50%] sm:left-[75%] transform -translate-x-1/2 sm:-translate-x-2/3 flex flex-col items-center justify-center"
                    onClick={handleScrollClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    data-hover
                >
                    <motion.span
                        className="text-[10px] tracking-[0.3em] uppercase"
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
