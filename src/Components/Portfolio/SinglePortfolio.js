import React from 'react'
import { useNavigate } from 'react-router-dom'

const SinglePortfolio = ({ item }) => {
  const navigate = useNavigate()
  const handlePortfolio = (e) => {
    navigate('/portfolio/' + item.id)
  }
  return (
    <div

      className='relative group  bg-cover  hover:bg-blend-overlay bg-no-repeat bg-center h-screen bg-[#00000081] min-w-full 
    sm:min-w-[50%] md:min-w-[33%]' style={{ backgroundImage: `url(${item.background})`, }}
      onClick={handlePortfolio} >


      <div className='h-[20%] w-[80%] sm:w-[90%] md:w-[75%] absolute top-1/2 transform -translate-y-1/2 left-0 pl-4 hidden group-hover:block'>

        <p className='text-yellow-2 font-semibold text-sm uppercase'>{item.category}</p>
        <p className='text-3xl uppercase font-bold'>{item.sub}</p>


      </div>
    </div>
  )
}

export default SinglePortfolio