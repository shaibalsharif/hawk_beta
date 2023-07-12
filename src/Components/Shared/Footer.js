import React from 'react'
import hawk_logo from '../../Assets/images/logo.png'
import { NAV_ITEM_LIST, SOCIAL_LINKS } from '../../Assets/data'
const Footer = () => {
    return (
        <div>

            <div className=' invisible'>
            <div className=' w-full  bg-dark-1 grid grid-cols-1 text-center py-12 md:grid-cols-4 -z-[20]'>
                <div className='h-12 my-12'><img src={hawk_logo} className='h-full mx-auto' /></div>
                <div className='my-12 '>
                    <ul >
                        {NAV_ITEM_LIST.map(el => <li className='uppercase'>{el.name}</li>)}
                    </ul>
                </div>
                <div className='grid grid-cols-6 w-[60%] mx-auto my-6 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div className='col-span-5 text-start text-[11px] tracking-[1px] font-[600]'>INFO@HAWKBANGLADESH.COM</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    <div className='col-span-5 text-start text-[11px] tracking-[1px] font-[600]'>+88 01780003454</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className='col-span-5 text-start text-[11px] tracking-[1px] font-[600] '>HOUSE: 07, ROAD: 04, BLOCK: B,
                        BOSILA WEST DHANMONDI HOUSING,
                        MOHAMMADPUR, DHAKA 1207</div>
                </div>
                <div className='text-center uppercase  text-[14px] font-[400] my-8 '>
                    {SOCIAL_LINKS.map(el => <p className='mb-[.3rem] tracking-widest'>{el.name}</p>)}
                </div>

                <div className='tracking-[5px] text-[10px] md:col-span-4'> © COPYRIGHT 2023 HAWK</div>
            </div>
            </div>
            <div className='fixed bottom-0 left-0 w-full  bg-dark-1 grid grid-cols-1 text-center py-12 md:grid-cols-4 -z-[10]'>
                <div className='h-12 my-12'><img src={hawk_logo} className='h-full mx-auto' /></div>
                <div className='my-12 '>
                    <ul >
                        {NAV_ITEM_LIST.map(el => <li className='uppercase'>{el.name}</li>)}
                    </ul>
                </div>
                <div className='grid grid-cols-6 w-[60%] mx-auto my-6 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div className='col-span-5 text-start text-[11px] tracking-[1px] font-[600]'>INFO@HAWKBANGLADESH.COM</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    <div className='col-span-5 text-start text-[11px] tracking-[1px] font-[600]'>+88 01780003454</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className='col-span-5 text-start text-[11px] tracking-[1px] font-[600] '>HOUSE: 07, ROAD: 04, BLOCK: B,
                        BOSILA WEST DHANMONDI HOUSING,
                        MOHAMMADPUR, DHAKA 1207</div>
                </div>
                <div className='text-center uppercase  text-[14px] font-[400] my-8 '>
                    {SOCIAL_LINKS.map(el => <p onClick={(e)=>{console.log(e.target)}} className='mb-[.3rem] tracking-widest'>{el.name}</p>)}
                </div>

                <div className='tracking-[5px] text-[10px] md:col-span-4'> © COPYRIGHT 2023 HAWK</div>
            </div>
        </div>

    )
}

export default Footer