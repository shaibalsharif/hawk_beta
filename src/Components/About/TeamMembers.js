import React from 'react'
import { TEAM_MEMBERS } from '../../Assets/data'

const TeamMembers = () => {
  return (
    <div className='px-4 w-full h-full grid grid-cols-1 md:grid-cols-3 bg-dark-2 py-28 md:gap-4 md:px-[15%]'>
    <div className='w-md'>
      <p className='text-yellow-2 text-sm'>OUR BEST EXPERTS</p>
      <div className='text-[25px] tracking-[2px] font-[500] w-[10rem] leading-7 mb-12'>TEAM YOU
        WANT TO
        WORK WITH</div>
    </div>
    {TEAM_MEMBERS?.map(el => (
      <div className='py-2'>
        <img src={el.photo} />
        <div className='py-4 flex flex-col gap-2'>
          <p className='uppercase text-[13px] font-[600]'>{el.name}</p>
          <p className='uppercase text-[10px] font-[400] tracking-[5px]'>{el.position}</p>
        </div>

      </div>
    ))}



  </div>
  )
}

export default TeamMembers