import React, { useEffect, useState } from 'react'
import { getPhotoUrl } from '../../Firebase/firebase_utils'



const TeamMembers = ({title,detail, teamMembers}) => {




  return (
    <div className='px-4 w-full h-full grid grid-cols-1 md:grid-cols-3 bg-dark-2 py-28 md:gap-4 md:px-[15%]'>
      <div className='w-md'>
        <p className='text-yellow-2 text-sm uppercase'>{title}</p>
        <div className='text-[25px] tracking-[2px] font-[500] w-[10rem] leading-7 mb-12 uppercase'>{detail}</div>
      </div>
      {teamMembers?.map(el => (
        <div className='py-2'>
          <img src={el.photo?getPhotoUrl( el.photo.type, el.photo.url):""} />
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