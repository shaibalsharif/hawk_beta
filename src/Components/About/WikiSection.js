import React, { useRef, useState } from 'react'
import '../../Assets/styles/about.css'
const WikiSection = () => {

  const image_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const imageItemsRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  
  const handleScroll = (event) => {
    setScrollLeft(event.target.scrollLeft);
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    setScrollLeft(event.target.scrollLeft);
    setDragStartX(event.touches[0].clientX);
  };


  const handleTouchMove = (event) => {
    const touchDelta = event.touches[0].clientX - dragStartX;
    const itemWidth = imageItemsRef.current.children[0].offsetWidth;
    const snapDistance = Math.round(touchDelta / itemWidth) * itemWidth;
    imageItemsRef.current.scrollLeft = scrollLeft - snapDistance;
  };
  
  const handleMouseMove = (event) => {
    if (dragStartX === null) return;
    const mouseDelta = event.clientX - dragStartX;
    const itemWidth = imageItemsRef.current.children[0].offsetWidth;
    const snapDistance = Math.round(mouseDelta / itemWidth) * itemWidth;
    imageItemsRef.current.scrollLeft = scrollLeft - snapDistance;
  };
  const handleMouseDown = (event) => {
    event.preventDefault();
    setScrollLeft(event.target.scrollLeft);
    setDragStartX(event.clientX);
  };



  const handleMouseUp = () => {
    setDragStartX(null);
  };

  const handlePrevButtonClick = () => {
    
    imageItemsRef.current.scrollLeft -= itemWidth.current;
  };

  const handleNextButtonClick = () => {
    imageItemsRef.current.scrollLeft += itemWidth.current;
  };
  return (
    <div className='w-full py-20 px-4 bg-white'>
      <h2 className='uppercase text-center text-[#262626] text-[40px] font-[600] -tracking-[2px] py-8 mb-10'>we are creative</h2>

      <div className='relative h-[70vh]'>
        <div className=''>
          <div 
            className='slider-item section-container'
            ref={imageItemsRef}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          >
            {image_items.map((el) => {
              return <img key={el} className='slider-item-img' src={`./slider/${el}.jpg`} style={{ scrollSnapAlign: 'center' }} />;
            })}
          </div>
          {/* Prev Button */}
          <div className='flex justify-center items-center'>
            <button className='bg-transparent text-black'  onClick={handlePrevButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            {/* Next Button */}
            <button className='bg-transparent text-black'  onClick={handleNextButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WikiSection