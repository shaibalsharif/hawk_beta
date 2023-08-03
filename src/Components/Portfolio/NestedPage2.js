import React from 'react'

const NestedPage2 = ({ item }) => {
    console.log(item);


    return (
        <div className='min-h-screen bg-[#e7e5e5] h-full w-full  md:px-[10%] px-4 pt-20 pb-16'>

            <div className=' px-[10%] flex items-end justify-between'>

                <div className='text-dark-1 font-bold text-2xl w-full'>
                    <p>{item.title}</p>

                    <p className='text-[#a09c9c] text-sm font font-light w-[80%] text-justify'>{item.description}</p>
                </div>
                <div>
                    <img  src={item.photos[0]}/>
                </div>



            </div>



        </div>
    )
}

export default NestedPage2