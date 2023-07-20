import React from 'react'
import car2 from '../../Assets/images/car2.jpg'
const OurWork = () => {
  return (
    <div className=' py-20 bg-dark-1'>
      <p className='uppercase text-5xl text-yellow-2 font-bold text-center'>What we Do</p>
      <img src={car2} className='w-full px-8 my-16' />
      <div className='px-8 text-yellow-2 text-2xl font-semibold tracking-widest'>
        <div className=''>THIS IS HAWK</div>
        <div className=''>THAT IS HAWK</div>
        <div className=''>ALL ARE HAWK</div>
        <div className=' mt-8 text-white text-sm font-normal text-justify'>
        <span className='bg-yellow-2 text-black'>Shoreditch cliche marfa godard</span> gochujang kinfolk hoodie you probably haven't heard of them echo park DIY tilde PBR&B.
         Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha paleo, iPhone swag af flexitarian hella pickled neutra pug. 
         Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf moon tacos try-hard, raw denim locavore messenger
        bag portland. Blue bottle hashtag schlitz etsy knausgaard, aesthetic tacos freegan lomo deep v fashion axe.
        </div>
      </div>

    </div>
  )
}

export default OurWork