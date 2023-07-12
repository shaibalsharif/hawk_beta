import React from 'react'
import car1 from '../Assets/images/car1.jpg'
import { TEAM_MEMBERS } from '../Assets/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle'
import Footer from '../Components/Shared/Footer';

const About = () => {
  return (
    <div className=''>

      <div className='sm:flex items-center sm:bg-dark-2 relative '>
        <img src={car1} className='object-cover w-full h-screen absolute top-0 left-0 sm:relative -z-10 sm:z-0 sm:w-full ' />

        <div className=' h-screen px-8  sm:w-full  flex items-center bg-black bg-opacity-25 '>
          <div className='md:w-[55%]'>
            <p className='text-yellow-2 text-[40px] font-bold tracking-widest' >WELCOME HAWK</p>
            <div className=' text-[40px] sm:text-[55px]  font-[700] leading-[60px]  '> BEST PHOHTOGRAPHY & VIDEOGRAPHY FOR YOUR NEED</div>
            <div className=' text-xs sm:text-sm font-[500] flex justify-between pt-8 w-[80%] sm:w-[40%]'>
              <p>CREATIVE TEAM</p>
              <p>INNOVATION IDEAS</p>
              <p>BEST SERVICES</p>
            </div>
          </div>


          <div className='absolute bottom-0 left-[50%] sm:left-[75%] transform -translate-x-1/2 sm:-translate-x-2/3 flex flex-col items-center justify-center'>
            SCROLL
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </span>
          </div>
        </div>
      </div>

      <div className='h-[90vh] min-h-[480px] w-full bg-dark-1 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between
        px-4 md:px-8 text-justify '>
        <h2 className=' text-yellow-2 text-[23px] md:text-[30px] tracking-[2px] font-[500] uppercase md:text-end'>who we are</h2>
        <p className='text-[14px] mt-8 font-[400] font-sans leading-tight md:w-[65%]'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </div>

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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          {TEAM_MEMBERS.map(el => <SwiperSlide> <img src={el.photo} /></SwiperSlide>)}
        </Swiper>

      </div>
    
      <Footer />
    </div>
  )
}

export default About