import React from 'react'
import { motion } from 'framer-motion'

const XEN_EASE = [0.76, 0, 0.24, 1]

/**
 * Wraps children in a Framer Motion element that slides + fades in
 * when it enters the viewport.
 *
 * Props:
 *   delay      – seconds before animation starts (default 0)
 *   direction  – 'up' | 'down' | 'left' | 'right' (default 'up')
 *   distance   – pixels to travel (default 40)
 *   duration   – animation seconds (default 0.8)
 *   once       – only animate once (default true)
 *   className  – forwarded to wrapper div
 */
const ScrollReveal = ({
    children,
    delay = 0,
    direction = 'up',
    distance = 40,
    duration = 0.8,
    once = true,
    className = '',
    as: Tag = 'div',
}) => {
    const initial = {
        opacity: 0,
        y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    }

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once, margin: '-80px' }}
            transition={{ duration, delay, ease: XEN_EASE }}
        >
            {children}
        </motion.div>
    )
}

/**
 * Image that reveals itself with a clip-path wipe from bottom → top,
 * with a subtle scale-down from 1.08 → 1.
 */
export const ImageReveal = ({ src, alt = '', className = '', delay = 0, style = {} }) => (
    <div style={{ overflow: 'hidden', ...style }}>
        <motion.img
            src={src}
            alt={alt}
            className={className}
            initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.08 }}
            whileInView={{
                clipPath: 'inset(0% 0 0 0)',
                scale: 1,
            }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay, ease: XEN_EASE }}
        />
    </div>
)

export default ScrollReveal
