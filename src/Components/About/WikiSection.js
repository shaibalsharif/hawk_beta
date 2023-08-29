import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle'
import { TEAM_MEMBERS } from '../../Assets/data'
import { Swiper, SwiperSlide } from 'swiper/react';

const WikiSection = () => {
  return (
    <div className='w-full py-20 px-4 bg-white '>
    <h2 className='uppercase text-center text-[#262626] text-[40px] font-[600] -tracking-[2px] py-8 mb-10'>we are creative</h2>

    {/* <iframe src="https://en.wikipedia.org/w/index.php?title=Bangladesh&oldid=1164707128" className='scale-[400%] -z-[20]' width="100%" height="600"></iframe> */}

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => swiper}
      onSlideChange={() => console.log('slide change')}>
      {TEAM_MEMBERS.map(el => <SwiperSlide> <img src={el.photo} /></SwiperSlide>)}
    </Swiper>

  </div>
  )
}

export default WikiSection