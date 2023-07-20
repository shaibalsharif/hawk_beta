import React from 'react'
import car1 from '../../Assets/images/car1.jpg'

const Cover = () => {
  return (
    <div className='sm:flex items-center sm:bg-dark-2 relative z-0'>
    <img src={car1} className='object-cover w-full h-screen absolute top-0 left-0 sm:relative -z-10 sm:z-0 sm:w-full ' />

    <div className=' h-screen px-8  sm:w-full  flex items-center bg-black bg-opacity-25 '>
      <div className='md:w-[55%]'>
        <p className='text-yellow-2 text-[40px] font-bold tracking-widest' >WELCOME HAWK</p>
        <div className=' text-[40px] sm:text-[55px]  font-[700] leading-[60px]  '> BEST PHOHTOGRAPHY & VIDEOGRAPHY FOR YOUR NEED</div>
        <div className=' text-xs sm:text-sm font-[500] flex justify-between pt-8 w-[80%] sm:w-[40%]'>
          <p>CREATIVE TEAM</p>
          <p>INNOVATION IDEAS</p>
          <p>BEST SERVICES</p>
        </div>
      </div>


      <div className='absolute bottom-0 left-[50%] sm:left-[75%] transform -translate-x-1/2 sm:-translate-x-2/3 flex flex-col items-center justify-center'>
        SCROLL
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Cover