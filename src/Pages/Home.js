import React, { useState } from 'react'
import '../Assets/styles/home.css'
import { URL_ID_LIST }  from '../Assets/data'
const Home = () => {
 
  const [videoIndex, setVideoIndex] = useState(0)
  return (
    <div className="home-constainer">

      <iframe className='video-back '
        src={`https://www.youtube.com/embed/${URL_ID_LIST[videoIndex]}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=0&showinfo=0&rel=0&disablekb=1`}
        rel='0'
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

      <div className='title'>
        This is new
      </div>
      <div className='video-counter'>
        {`0${videoIndex + 1}`}
      </div>
      <div className='video-category'>
        FPV
      </div>
      <div className='video-change-panel'>
        <svg onClick={() => {
          if (videoIndex !== 0) {
            setVideoIndex(videoIndex - 1)
          } else {
            setVideoIndex(URL_ID_LIST.length - 1)
          }
        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="change-button">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <svg onClick={() => {
          if (videoIndex !== URL_ID_LIST.length - 1) {
            setVideoIndex(videoIndex + 1)
          }
          else {
            setVideoIndex(0)
          }
        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="change-button">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

      </div>

    </div>

  )
}

export default Home