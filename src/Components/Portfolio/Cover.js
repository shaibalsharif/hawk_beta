import React from 'react'

const Cover = ({image,title,client,year,role}) => {
  return (
    <div className='sm:flex items-center sm:bg-dark-2 relative z-0 w-full'>
    <img src={image } className='object-cover w-full h-screen absolute top-0 left-0 sm:relative -z-10 sm:z-0 sm:w-full md:w-[50%] ' />

    <div className=' h-screen px-8  sm:w-full  flex items-center bg-black bg-opacity-25 '>
      <div className='w-[80%] md:w-[75%] text-yellow-2 uppercase'>
        
        <div className=' text-[40px] sm:text-[55px]  font-[700] leading-[60px]  '>{title}</div>
        <div className=' text-xs sm:text-sm font-[500] flex justify-between pt-8 w-[80%] sm:w-[40%] md:w-[60%] '>
          <p>Client: {client}</p>
          <p>year: {year}</p>
          <p>Role: {role}</p>
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