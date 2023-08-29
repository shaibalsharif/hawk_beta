import React from 'react'
import svg1 from '../../Assets/images/clients/logo1.svg'
import svg2 from '../../Assets/images/clients/logo2.svg'
import svg3 from '../../Assets/images/clients/logo3.svg'
import svg4 from '../../Assets/images/clients/logo4.svg'
import svg5 from '../../Assets/images/clients/logo5.svg'
import svg6 from '../../Assets/images/clients/logo6.svg'
import { getPhotoUrl } from '../../Firebase/firebase_utils'



const text = [svg1,svg2,svg3,svg4,svg5,svg6,svg4,svg5,svg6,svg6,svg4]
const ClientHub = ({data}) => {

  return (
    <div className='min-h-screen bg-dark-2 w-full uppercase flex flex-col justify-center items-start px-[20%] gap-20'>
      <div className='h-[20%] text-5xl text-red-600 tracking-wider font-bold py-10'>
        <p className='w-1/2'>{data?.title}</p>
        <p>{data?.details}</p>
      </div>
      <div className='grid grid-cols-4 w-full text-3xl  text-center p-8 
      [&>*:nth-child(1)]:border-l-0 [&>*:nth-child(1)]:border-t-0 [&>*:nth-child(2)]:border-t-0 [&>*:nth-child(3)]:border-t-0 [&>*:nth-child(4)]:border-t-0
      [&>*:nth-child(4)]:border-r-0   [&>*:nth-child(9)]:border-l-0 [&>*:nth-child(9)]:border-b-0 [&>*:nth-child(10)]:border-b-0 [&>*:nth-child(11)]:border-b-0 
      [&>*:nth-child(8)]:border-r-0 [&>*:nth-child(5)]:border-l-0
       py-20'>
        {data?.content?.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10 px-4'>
            {<img src={getPhotoUrl(el.image?.type,el.image?.url)}/>}
          </div>)
        })}
         {data?.content?.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10 px-4'>
            {<img src={getPhotoUrl(el.image?.type,el.image?.url)}/>}
          </div>)
        })}
         {data?.content?.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10 px-4'>
            {<img src={getPhotoUrl(el.image?.type,el.image?.url)}/>}
          </div>)
        })}
         {data?.content?.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10 px-4'>
            {<img src={getPhotoUrl(el?.image?.type,el?.image?.url)}/>}
          </div>)
        })}
         {data?.content?.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10 px-4'>
            {<img src={getPhotoUrl(el?.image?.type,el?.image?.url)}/>}
          </div>)
        })} {[data?.content[0]]?.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10 px-4'>
            {<img src={getPhotoUrl(el?.image?.type,el?.image?.url)}/>}
          </div>)
        })}
        <div className='text-sm flex justify-center items-center h-fit my-auto mx-8 border border-red-500 border-t-[50%] relative'>
          {data?.sub}
         {/*  <div className='absolute'>top left boder</div>
          <div className='absolute'>bottom right boder</div> */}
        </div>

      </div>
    </div>
  )
}

export default ClientHub