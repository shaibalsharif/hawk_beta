import React from 'react'
import mountain from '../../Assets/images/mountain.jpg'
const ContactForm = () => {
  return (
    <div className='py-20 px-4 relative z-10' style={{ backgroundImage: mountain }}>
      <img src={mountain} className='absolute top-0 left-0 -z-20 h-full w-full object-cover' />
      <div className='absolute top-0 left-0 -z-20 h-full w-full object-cover bg-[#20475e5b]'>
      </div>
      <p className='text-center uppercase'>let's get in touch</p>

      <form className='mb-16 mt-20 w-full bg-transparent text-white flex flex-col'>
        <div className='w-full flex flex-col md:grid grid-cols-3 gap-8'>
          <div className='w-full flex flex-col'>
            <label className='capitalize text-xs'>First Name</label>
            <input className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-[1px] outline-none py-2 rounded-none' type='text' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='capitalize text-xs'>Last Name</label>
            <input className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-[1px]
rounded-none outline-none py-2' type='text' />
          </div>


          <div className='w-full flex flex-col'>
            <label className='capitalize text-xs'>Email address</label>
            <input className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-[1px]
rounded-none outline-none py-2' type='text' />
          </div>

        </div>


        <label className='capitalize text-xs'>Messege Content</label>
        <textarea className='bg-transparent border-t-0 border-r-0 border-l-0 border-b-[1px]
rounded-none outline-none py-2' type='text' />

        <button className='uppercase px-12 tracking-[.3rem] leading-3 mt-20 border w-fit mx-auto py-4'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm