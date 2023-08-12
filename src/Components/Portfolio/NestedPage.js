import React from 'react'

const NestedPage = ({ item }) => {



    return (
        <div className=' bg-white w-full  md:px-[10%] px-4  flex flex-col items-center justify-center'>

           
            
                    <img src={item} className='h-full object-cover' />
              
         

        </div>
    )
}

export default NestedPage