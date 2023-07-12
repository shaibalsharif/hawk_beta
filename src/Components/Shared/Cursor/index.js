import React, { useState, useEffect } from "react"

import './cursor.css'
import { useMotionValue, useSpring, motion } from "framer-motion"

const Cursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 50, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);


    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)

        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <motion.div className="cursor"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }} />
    )
}

export default Cursor