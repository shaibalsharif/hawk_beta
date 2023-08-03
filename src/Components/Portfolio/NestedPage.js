import React from 'react'

const NestedPage = ({ item }) => {
    console.log(item.orientation);


    return (
        <div className='min-h-screen bg-white w-full  md:px-[10%] px-4 pt-20 pb-16'>
            <div className='text-dark-1  flex flex-col md:flex-row  gap-6'>
                <p className='uppercase w-1/3 md:text-[1.7rem] text-[1.5rem] font-bold tracking-tighter'>{item.title}</p>
                <p className='w-2/3'>{item.description}</p>
            </div>
            <div className={`flex items-center ${item.orientation=='vertical'?'flex-row md:flex-col':'flex-col md:flex-row'} gap-6   h-[80%] mt-20`}>
                {item.photos.map(el => <div className='h-full md:w-1/3  w-full'><img src={el} className='h-full object-cover' /></div>)}
            </div>

        </div>
    )
}

export default NestedPage