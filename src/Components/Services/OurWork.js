import React from 'react'
import car2 from '../../Assets/images/car2.jpg'
import { getPhotoUrl } from '../../Firebase/firebase_utils'
const OurWork = ({data}) => {

  return (
    <div className=' py-20 bg-dark-1 px-[10%]'>
      <p className='uppercase text-5xl text-yellow-2 font-bold text-center'>{data?.title}</p>
      <img src={getPhotoUrl(data?.image?.type,data?.image?.url)} className='w-full px-8 my-16' />
      <div className='px-8 text-yellow-2 text-2xl font-semibold tracking-widest flex sm:px-[10%] items-start'>
        <div className='w-full'>
          <div className=''>{data?.sub}</div>
        </div>

        <div className=' text-white text-sm font-normal text-justify'>{data?.details}
        {/*   <span className='bg-yellow-2 text-black'>Shoreditch cliche marfa godard</span> gochujang kinfolk hoodie you probably haven't heard of them echo park DIY tilde PBR&B.
          Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha paleo, iPhone swag af flexitarian hella pickled neutra pug.
          Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf moon tacos try-hard, raw denim locavore messenger
          bag portland. Blue bottle hashtag schlitz etsy knausgaard, aesthetic tacos freegan lomo deep v fashion axe. */}
        </div>
      </div>

    </div>
  )
}

export default OurWork