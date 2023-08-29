import React from 'react'

const ContactDetails = ({data}) => {
  console.log(data);
  return (
    <div className='h-[90vh] min-h-[480px] w-full bg-dark-1 pt-20 py-28'>


      <div className='   w-full md:w-[80%] text-center  mx-auto py-8
        px-4 md:px-8  '>
        <h2 className=' text-yellow-2 text-[23px] md:text-[30px] tracking-[2px] font-[500] uppercase  text-center'>{data?.title}</h2>
        <p className='text-[14px] mt-8 font-[400] font-sans leading-tight  text-justify'>{data?.sub}</p>
      </div>

      <div className='md:w-[80%] mx-auto uppercase grid grid-cols-1 md:grid-cols-3 gap-12 '>
        <div className='px-4'>
          <p className=' text-sm text-yellow-2'>EMAIL US</p>
          <p className='uppercase font-bold text-3xl w-[60%] mb-4'>{data?.email.details}</p>
          {data?.email?.emails?.map(el=> <p className='text-sm'>{el}</p>)}
         
        </div>
        <div className='px-4'>
          <p className=' text-sm text-yellow-2'>visit Us</p>
          {data?.address?.map(el=>{
            return( <p className='uppercase font-bold text-3xl w-[60%] mb-4'>{el}</p>)
          })}
         
          <p className='text-sm'>OPEN IN GOOGLE MAPS</p>

        </div>
        <div className='px-4'>
          <p className=' text-sm text-yellow-2'>call US</p>
          <p className='uppercase font-bold text-3xl w-[60%] mb-4'>{data?.phone?.details}</p>
          {data?.phone?.phones?.map(el=><p className='text-sm'>{el}</p>)}
          
        </div>

      </div>
    </div>
  )
}

export default ContactDetails