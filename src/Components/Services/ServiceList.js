import React from 'react'
import { motion } from 'framer-motion'
import { getPhotoUrl } from '../../Firebase/firebase_utils'

const XEN_EASE = [0.76, 0, 0.24, 1]

const ServiceList = ({ data }) => {
    return (
        <div className="uppercase py-28 bg-white text-black min-h-[80vh]">
            {/* Section heading */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: XEN_EASE }}
            >
                <p className="text-7xl font-bold">{data?.title}</p>
                <p className="text-xs font-normal tracking-widest mt-2">{data?.sub}</p>
            </motion.div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 px-[10%] md:px-[20%] gap-10 my-12">
                {data?.content?.map((item, i) => (
                    <motion.div
                        key={item?.name || i}
                        className="shadow-md overflow-hidden group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: i * 0.1, ease: XEN_EASE }}
                        whileHover={{ y: -6 }}
                    >
                        {/* Image */}
                        <div className="h-60 bg-slate-400 bg-opacity-10 overflow-hidden">
                            <motion.img
                                src={getPhotoUrl(item?.image?.type, item?.image?.url)}
                                className="h-full w-full object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Details */}
                        <div className="px-4 space-y-2 py-4 bg-[#a7a7a72f] transition-colors duration-300 group-hover:bg-[#a7a7a750]">
                            <p className="font-[600] tracking-wide">{item?.name}</p>
                            <p className="normal-case font-[300] text-sm leading-relaxed">{item?.details}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ServiceList
