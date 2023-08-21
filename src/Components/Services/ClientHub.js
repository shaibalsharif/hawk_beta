import React from 'react'

const text = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'e',]
const ClientHub = () => {

  return (
    <div className='min-h-screen bg-dark-2 w-full uppercase flex flex-col justify-center items-start px-[20%] gap-20'>
      <div className='h-[20%] text-5xl text-red-600 tracking-wider font-bold'>
        <p>Fine Folks</p>
        <p>We've worked</p>
        <p>with</p>
      </div>
      <div className='grid grid-cols-4 w-full text-3xl  text-center 
      [&>*:nth-child(1)]:border-l-0 [&>*:nth-child(1)]:border-t-0 [&>*:nth-child(2)]:border-t-0 [&>*:nth-child(3)]:border-t-0 [&>*:nth-child(4)]:border-t-0
      [&>*:nth-child(4)]:border-r-0   [&>*:nth-child(9)]:border-l-0 [&>*:nth-child(9)]:border-b-0 [&>*:nth-child(10)]:border-b-0 [&>*:nth-child(11)]:border-b-0 
      [&>*:nth-child(8)]:border-r-0 [&>*:nth-child(5)]:border-l-0
      '>
        {text.map(el => {
          return (<div className=' w-full h-full flex justify-center items-center  border  py-10'>
            {el}
          </div>)
        })}
        <div className='text-sm flex justify-center items-center h-fit my-auto mx-8 border border-red-500 border-t-[50%] relative'>
          <p>This spot awaits you</p>
                <div className='absolute'>top left boder</div>
        <div className='absolute'>bottom right boder</div>
        </div>

      </div>
    </div>
  )
}

export default ClientHub