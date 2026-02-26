import React from 'react'
import { motion } from 'framer-motion'
import { getPhotoUrl } from '../../Firebase/firebase_utils'

const XEN_EASE = [0.76, 0, 0.24, 1]

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay: i * 0.1, ease: XEN_EASE },
    }),
}

const TeamMembers = ({ title, detail, teamMembers }) => {
    return (
        <div className="px-4 w-full h-full grid grid-cols-1 md:grid-cols-3 bg-dark-2 py-28 md:gap-4 md:px-[15%]">
            {/* Section label */}
            <div className="w-md">
                <motion.p
                    className="text-yellow-2 text-sm uppercase tracking-widest"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {title}
                </motion.p>
                <motion.div
                    className="text-[25px] tracking-[2px] font-[500] w-[10rem] leading-7 mb-12 uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: XEN_EASE }}
                >
                    {detail}
                </motion.div>
            </div>

            {/* Team cards */}
            {teamMembers?.map((el, i) => (
                <motion.div
                    key={el.name || i}
                    className="py-2"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {/* Image with clip-path reveal */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.img
                            src={el.photo ? getPhotoUrl(el.photo.type, el.photo.url) : ''}
                            alt={el.name}
                            className="h-[50vh] max-h-[65vh] w-full object-cover"
                            initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.07 }}
                            whileInView={{ clipPath: 'inset(0% 0 0 0)', scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 1, delay: i * 0.1, ease: XEN_EASE }}
                            whileHover={{ scale: 1.04 }}
                        />
                    </div>

                    {/* Member info */}
                    <div className="py-4 flex flex-col gap-2">
                        <p className="uppercase text-[13px] font-[600] tracking-wider">{el.name}</p>
                        <p className="uppercase text-[10px] font-[400] tracking-[5px] text-white/60">
                            {el.position}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default TeamMembers
