import React, { useState, useEffect } from 'react'
import './cursor.css'
import { useMotionValue, useSpring, motion } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"], .nav-link, .change-button, svg, input, textarea, select, label, [data-hover]'

const Cursor = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    const mouseX = useMotionValue(-200)
    const mouseY = useMotionValue(-200)

    // Dot: near-instant follow
    const dotX = useSpring(mouseX, { damping: 100, stiffness: 2000 })
    const dotY = useSpring(mouseY, { damping: 100, stiffness: 2000 })

    // Ring: loose lag for trailing effect
    const ringX = useSpring(mouseX, { damping: 28, stiffness: 180 })
    const ringY = useSpring(mouseY, { damping: 28, stiffness: 180 })

    useEffect(() => {
        const onMove = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        const onOver = (e) => {
            setIsHovering(!!e.target.closest(INTERACTIVE))
        }
        const onDown = () => setIsClicking(true)
        const onUp = () => setIsClicking(false)

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseover', onOver)
        window.addEventListener('mousedown', onDown)
        window.addEventListener('mouseup', onUp)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseover', onOver)
            window.removeEventListener('mousedown', onDown)
            window.removeEventListener('mouseup', onUp)
        }
    }, [mouseX, mouseY])

    return (
        <>
            {/* Small yellow dot */}
            <motion.div
                className="cursor-dot"
                style={{ x: dotX, y: dotY }}
                animate={{ scale: isClicking ? 0.4 : 1 }}
                transition={{ duration: 0.1 }}
            />

            {/* Lagging ring — expands & turns yellow on hover */}
            <motion.div
                className="cursor-ring"
                style={{ x: ringX, y: ringY }}
                animate={{
                    scale: isHovering ? 2.4 : isClicking ? 0.8 : 1,
                    borderColor: isHovering ? '#fcda02' : 'rgba(255,255,255,0.5)',
                    opacity: isHovering ? 0.55 : 1,
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            />
        </>
    )
}

export default Cursor
