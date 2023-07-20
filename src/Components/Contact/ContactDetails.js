import React from 'react'

const ContactDetails = () => {
  return (
    <div className='h-[90vh] min-h-[480px] w-full bg-dark-1 pt-20 py-28'>


      <div className='   w-full md:w-[80%] text-center  mx-auto py-8
        px-4 md:px-8  '>
        <h2 className=' text-yellow-2 text-[23px] md:text-[30px] tracking-[2px] font-[500] uppercase  text-center'>contact us</h2>
        <p className='text-[14px] mt-8 font-[400] font-sans leading-tight  text-justify'>Succulents mlkshk hammock jean shorts flexitarian chicharrones,
          skateboard 90's knausgaard heirloom sustainable fixie forage. Vegan cloud bread forage lyft,
          cornhole food truck salvia portland locavore mlkshk. Etsy synth taxidermy godard DIY,
          tote bag fingerstache.</p>
      </div>

      <div className='md:w-[80%] mx-auto uppercase grid grid-cols-1 md:grid-cols-3 gap-12 '>
        <div className='px-4'>
          <p className=' text-sm text-yellow-2'>EMAIL US</p>
          <p className='uppercase font-bold text-3xl w-[60%] mb-4'>PALO LISTICLE
            VAPE BANJO
            MEDITATION</p>
          <p className='text-sm'>Email@xen_agency.com</p>
          <p className='text-sm'>Email@xen_agency.com</p>
        </div>
        <div className='px-4'>
          <p className=' text-sm text-yellow-2'>visit US</p>
          <p className='uppercase font-bold text-3xl w-[60%] mb-4'>PO BOX 223158
            OLIVER STREET
            VICTORIA 2006</p>
          <p className='text-sm'>OPEN IN GOOGLE MAPS</p>

        </div>
        <div className='px-4'>
          <p className=' text-sm text-yellow-2'>call US</p>
          <p className='uppercase font-bold text-3xl w-[60%] mb-4'>ORGANIC CRED
            ECHO PARK DIY
            HASHTAG IRONY</p>
          <p className='text-sm'>+23 2255 5 55848</p>
        </div>

      </div>
    </div>
  )
}

export default ContactDetails