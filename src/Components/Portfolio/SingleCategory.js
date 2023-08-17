import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPhotoUrl } from '../../Firebase/firebase_utils';

const SingleCategory = ({ category }) => {

  

  const navigate = useNavigate()
  const handleCategory = (e) => {
    navigate('/portfolio/' + category.id?.toLowerCase())
  }

console.log(getPhotoUrl(category.data.photo.type,category.data.photo.url));
  return (
    <div

      className='relative group  bg-cover  hover:bg-blend-overlay bg-no-repeat bg-center h-screen bg-[#00000081] min-w-full 
    sm:min-w-[50%] md:min-w-[33%]' style={{ backgroundImage: `url(${getPhotoUrl(category.data.photo.type,category.data.photo.url)})`}}
      onClick={handleCategory} >

      <div className='h-[20%] w-[80%] sm:w-[90%] md:w-[75%] absolute top-1/2 transform -translate-y-1/2 left-0 pl-4 hidden group-hover:block'>

        <p className='text-yellow-2 font-semibold text-sm uppercase'>{category.data.title}</p>
        <p className='text-3xl uppercase font-bold'>{category.data.details}</p>


      </div>
    </div>
  )
}

export default SingleCategory