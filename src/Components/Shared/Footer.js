import React from 'react'
import hawk_logo from '../../Assets/images/logo.png'
import { NAV_ITEM_LIST, SOCIAL_LINKS } from '../../Assets/data'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    const handleNav = (name) => navigate(name === 'home' ? '/' : `/${name}`)

    return (
        <div>
            {/* Invisible spacer so page content isn't hidden behind fixed footer */}
            <div className="invisible pointer-events-none">
                <FooterContent navigate={handleNav} />
            </div>

            {/* Actual fixed footer */}
            <div className="fixed bottom-0 left-0 w-full bg-dark-1 z-[-10]">
                <FooterContent navigate={handleNav} />
            </div>
        </div>
    )
}

const FooterContent = ({ navigate }) => (
    <div className="w-full grid grid-cols-1 text-center py-10 md:grid-cols-4 px-4 gap-6 md:gap-0">
        {/* Logo */}
        <div className="flex items-center justify-center">
            <img src={hawk_logo} className="h-10" alt="Hawk" />
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-center justify-center gap-1">
            {NAV_ITEM_LIST.map((el) => (
                <motion.span
                    key={el.name}
                    onClick={() => navigate(el.name)}
                    className="uppercase text-[11px] tracking-[0.2em] text-white/60 hover:text-yellow-2 transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    data-hover
                >
                    {el.name}
                </motion.span>
            ))}
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-[1.2rem_1fr] w-[80%] max-w-xs mx-auto gap-x-3 gap-y-2 text-left">
            {/* Email */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-yellow-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-[10px] tracking-[1px] font-[500] text-white/70">INFO@HAWKBANGLADESH.COM</span>

            {/* Phone */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-yellow-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="text-[10px] tracking-[1px] font-[500] text-white/70">+88 01780003454</span>

            {/* Address */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-yellow-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-[10px] tracking-[1px] font-[500] text-white/70 leading-relaxed">
                HOUSE 07, ROAD 04, BLOCK B,<br />MOHAMMADPUR, DHAKA 1207
            </span>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center justify-center gap-1">
            {SOCIAL_LINKS.map((el) => (
                <motion.a
                    key={el.name}
                    href={el.url}
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase text-[11px] tracking-[0.25em] text-white/60 hover:text-yellow-2 transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    data-hover
                >
                    {el.name}
                </motion.a>
            ))}
        </div>

        {/* Copyright */}
        <div className="tracking-[4px] text-[9px] text-white/30 md:col-span-4 text-center pt-4 border-t border-white/10">
            © COPYRIGHT 2023 HAWK
        </div>
    </div>
)

export default Footer
