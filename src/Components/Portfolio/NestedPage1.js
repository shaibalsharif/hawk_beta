import React from 'react'

const NestedPage1 = ({ item }) => {
    console.log(item);


    return (
        <div className='h-full min-h-screen bg-white'>
        
                    (<div className='w-full object-cover'>
                        <img src={item.photos[0]} className='object-cover' />
                    </div>) 


        </div>
    )
}

export default NestedPage1