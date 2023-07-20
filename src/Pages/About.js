import React from 'react'
import Footer from '../Components/Shared/Footer';
import Cover from '../Components/About/Cover';
import TeamMembers from '../Components/About/TeamMembers';
import WikiSection from '../Components/About/WikiSection';

const About = () => {
  return (
    <div className=''>
      <Cover />
      <div className='h-[90vh] min-h-[480px] w-full bg-dark-1 flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between
        px-4 md:px-8 text-justify '>
        <h2 className=' text-yellow-2 text-[23px] md:text-[30px] tracking-[2px] font-[500] uppercase md:text-end'>who we are</h2>
        <p className='text-[14px] mt-8 font-[400] font-sans leading-tight md:w-[65%]'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </div>
      <TeamMembers />
      <WikiSection />
      <Footer />
    </div>
  )
}

export default About