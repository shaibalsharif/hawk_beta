import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import '../../Assets/styles/about.css'

const XEN_EASE = [0.76, 0, 0.24, 1]

const WikiSection = () => {
    const image_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const imageItemsRef = useRef(null)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [dragStartX, setDragStartX] = useState(null)
    const itemWidthRef = useRef(0)

    const handleScroll = (e) => setScrollLeft(e.target.scrollLeft)

    const handleTouchStart = (e) => {
        e.preventDefault()
        setScrollLeft(imageItemsRef.current.scrollLeft)
        setDragStartX(e.touches[0].clientX)
    }

    const handleTouchMove = (e) => {
        const delta = e.touches[0].clientX - dragStartX
        const w = imageItemsRef.current.children[0]?.offsetWidth || 1
        imageItemsRef.current.scrollLeft = scrollLeft - Math.round(delta / w) * w
    }

    const handleMouseDown = (e) => {
        e.preventDefault()
        itemWidthRef.current = imageItemsRef.current.children[0]?.offsetWidth || 0
        setScrollLeft(imageItemsRef.current.scrollLeft)
        setDragStartX(e.clientX)
    }

    const handleMouseMove = (e) => {
        if (dragStartX === null) return
        const delta = e.clientX - dragStartX
        const w = itemWidthRef.current || 1
        imageItemsRef.current.scrollLeft = scrollLeft - Math.round(delta / w) * w
    }

    const handleMouseUp = () => setDragStartX(null)

    const scroll = (dir) => {
        const w = imageItemsRef.current?.children[0]?.offsetWidth || 300
        imageItemsRef.current.scrollLeft += dir * w
    }

    return (
        <div className="w-full py-20 px-4 bg-white">
            {/* Section heading with reveal */}
            <div style={{ overflow: 'hidden' }}>
                <motion.h2
                    className="uppercase text-center text-[#262626] text-[40px] font-[600] -tracking-[2px] py-8 mb-10"
                    initial={{ y: '100%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.75, ease: XEN_EASE }}
                >
                    WE ARE CREATIVE
                </motion.h2>
            </div>

            <div className="relative h-[70vh]">
                {/* Drag-scroll slider */}
                <div
                    className="slider-item section-container"
                    ref={imageItemsRef}
                    onScroll={handleScroll}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    {image_items.map((el, i) => (
                        <motion.img
                            key={el}
                            className="slider-item-img"
                            src={`./slider/${el}.jpg`}
                            style={{ scrollSnapAlign: 'center' }}
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
                        />
                    ))}
                </div>

                {/* Arrow controls */}
                <div className="flex justify-center items-center mt-4 gap-2">
                    <button
                        className="bg-transparent text-black border border-black/20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                        onClick={() => scroll(-1)}
                        data-hover
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        className="bg-transparent text-black border border-black/20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                        onClick={() => scroll(1)}
                        data-hover
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WikiSection
