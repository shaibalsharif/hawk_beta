import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { getPhotoUrl } from '../../Firebase/firebase_utils'

const XEN_EASE = [0.76, 0, 0.24, 1]

const Cover = ({ title, sub, coverPhoto, points, nextRef }) => {
    const handleScrollClick = () => {
        nextRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="sm:flex items-center bg-dark-2 relative z-0">
            {/* Cover image with clip-path reveal */}
            <motion.img
                src={coverPhoto ? getPhotoUrl(coverPhoto.type, coverPhoto.url) : ''}
                className="object-cover w-full h-screen absolute top-0 left-0 overflow-hidden sm:relative -z-10 sm:z-0 sm:w-full"
                initial={{ clipPath: 'inset(0 0 100% 0)', scale: 1.08 }}
                animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
                transition={{ duration: 1.2, ease: XEN_EASE }}
            />

            {/* Text overlay */}
            <div className="h-screen px-8 sm:w-full flex items-center bg-black bg-opacity-30">
                <div className="md:w-[55%] overflow-hidden">
                    {/* Yellow title */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.p
                            className="text-yellow-2 text-[40px] font-bold tracking-widest uppercase"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.75, delay: 0.3, ease: XEN_EASE }}
                        >
                            {title}
                        </motion.p>
                    </div>

                    {/* Subtitle */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div
                            className="text-[40px] sm:text-[55px] font-[700] leading-[60px] uppercase"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.75, delay: 0.45, ease: XEN_EASE }}
                        >
                            {sub}
                        </motion.div>
                    </div>

                    {/* Points */}
                    <motion.div
                        className="text-xs sm:text-sm font-[500] flex justify-between pt-8 w-[80%] sm:w-[40%]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
                    >
                        {points?.map((point) => (
                            <p key={point} className="uppercase">
                                {point}
                            </p>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll CTA */}
                <motion.div
                    className="absolute bottom-0 left-[50%] sm:left-[75%] transform -translate-x-1/2 sm:-translate-x-2/3 flex flex-col items-center justify-center"
                    onClick={handleScrollClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    data-hover
                >
                    <motion.span
                        className="text-[10px] tracking-[0.3em] uppercase mb-1"
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
