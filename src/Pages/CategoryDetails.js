import React, { useEffect, useRef } from 'react'
import { PORTFOLIO_LIST } from '../Assets/data'
import SinglePortfolio from '../Components/Portfolio/SinglePortfolio'
import '../Assets/styles/portfolio.css'
import { useParams } from 'react-router-dom'



const CategoryDetails = () => {


    const listRef = useRef();
    const category = useParams().category
   
    useEffect(() => {
        const listContainer = listRef.current;

        const handleWheelScroll = (event) => {
            event.preventDefault();
            event.stopPropagation()
            const x = document.getElementById('trying')
            x.scrollLeft += event.deltaY > 0 ? 5 : -5
            console.log(event.deltaY > 0 ? 20 : -20);
        };

        const handleKeyDown = (event) => {
            if (listContainer) {
                if (event.key === 'ArrowLeft') {
                    listContainer.scrollLeft ? listContainer.scrollLeft -= 50 : listContainer.scrollLeft = 50; // Adjust the scroll speed as needed
                } else if (event.key === 'ArrowRight') {
                    listContainer.scrollLeft ? listContainer.scrollLeft += 50 : listContainer.scrollLeft = 50; // Adjust the scroll speed as needed
                } else if (event.key === 'ArrowUp') {
                    console.log("Im Up");
                    listContainer.scrollLeft ? listContainer.scrollLeft -= 50 : listContainer.scrollLeft = 50; // Adjust the scroll speed as needed
                } else if (event.key === 'ArrowDown') {
                    listContainer.scrollLeft ? listContainer.scrollLeft += 50 : listContainer.scrollLeft = 50; // Adjust the scroll speed as needed
                }
            }

        };

        listContainer.addEventListener('wheel', handleWheelScroll);
        window.addEventListener('keydown', handleKeyDown);


        return () => {
            listContainer.removeEventListener('wheel', handleWheelScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    useEffect(() => {
        console.log(PORTFOLIO_LIST.filter(el => el.category_name.toLowerCase() === category))
    }, [])



    return (
        <div style={{ overflowX: 'scroll', }}>
            <div className='flex ' ref={listRef} id='trying'>
                {PORTFOLIO_LIST.filter(el => el.category_name.toLowerCase() === category)[0]?.content.map(item => <SinglePortfolio key={'port-' + item?.id} item={item} />
                )}


            </div>

        </div>
    )
}

export default CategoryDetails