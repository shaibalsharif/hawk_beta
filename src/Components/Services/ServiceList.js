import React from 'react'
import photog from '../../Assets/images/car2.jpg'
import { getPhotoUrl } from '../../Firebase/firebase_utils'

const ServiceList = ({data}) => {
  return (
    <div className='uppercase py-28 bg-white text-black min-h-[80vh]'>
      <div className='text-center text-7xl font-bold'>
        <p>{data?.title}</p>
        <p className='text-xs font-normal tracking-widest'>{data?.sub}</p>
      </div>
      <div className='grid grid-cols-3 px-[20%] gap-10 my-8'>
      {data?.content?.map(item => {
          return (<div className=' shadow-md'>
            <div className='h-60  bg-slate-400 bg-opacity-10 '>
               <img src={getPhotoUrl(item?.image?.type,item?.image?.url)} className='h-full object-contain mx-auto' />
            </div>
           
            <div className='px-4 space-y-2 py-4 bg-[#a7a7a72f]'>
              <p>{item?.name}</p>
              <p className='normal-case font-[300]'>{item?.details}</p>
            </div>

          </div>)
        })}
      </div>

    </div>
  )
}

export default ServiceList