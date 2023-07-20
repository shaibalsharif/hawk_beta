import React from 'react'
import photog from '../../Assets/images/photog.png'
const ServiceList = () => {
  return (
    <div className='uppercase my-28 bg-white text-black h-[80vh]'>
      <div className='text-center text-7xl font-bold'>
        <p>Our Services</p>
        <p className='text-xs font-semibold tracking-widest'>WE CREATE BEST PRODUCTS</p>
      </div>

      <div>
        <img src={photog}/>
      </div>
    </div>
  )
}

export default ServiceList