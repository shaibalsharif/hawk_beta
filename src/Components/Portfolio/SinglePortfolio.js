import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPhotoUrl } from '../../Firebase/firebase_utils';

const SinglePortfolio = ({ item }) => {
 
  const navigate = useNavigate()
  const category = useParams().category

  const handlePortfolio = (e) => {
    navigate('/portfolio/' + category + '/' + item.content.id)
  }



  return (
    <div

      className='relative group  bg-cover  hover:bg-blend-overlay bg-no-repeat bg-center h-screen bg-[#00000081] min-w-full 
    sm:min-w-[50%] md:min-w-[33%]' style={{ backgroundImage: `url(${getPhotoUrl(item.photo.type,item.photo.url)})`, }}
      onClick={handlePortfolio} >

      <div className='h-[20%] w-[80%] sm:w-[90%] md:w-[75%] absolute top-1/2 transform -translate-y-1/2 left-0 pl-4 hidden group-hover:block'>

        <p className='text-yellow-2 font-semibold text-sm uppercase'>{item.title}</p>
        <p className='text-3xl uppercase font-bold'>{item.details}</p>


      </div>
    </div>
  )
}

export default SinglePortfolio