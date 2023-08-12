import React, { useEffect, useRef, useState } from 'react'
import { PORTFOLIO_LIST } from '../Assets/data'
import SinglePortfolio from '../Components/Portfolio/SinglePortfolio'
import '../Assets/styles/portfolio.css'
import { useParams } from 'react-router-dom'
import { fetchDocumentByName, getDocumentByRef, getDocumentByRefList } from '../Firebase/firebase_utils'



const CategoryDetails = () => {


    const listRef = useRef();
    const category = useParams().category


    const [portfolio_item_list, setPortfolio_item_list] = useState([])

    useEffect(() => {
        fetchDocumentByName('portfolio_category', category, setPortfolio_item_list)
    }, [])

   

    /*     useEffect(() => {
            fetchDocumentByName('portfolio_category', category, (data) => { setPortfolio_ref_list(data.content) })
        }, [])
    
    
        useEffect(() => {
            portfolio_ref_list.map(portfolio_ref => {
                getDocumentByRef(portfolio_ref, (data) => { setPortfolio_item_list([...portfolio_item_list, data]) })
            })
        }, [portfolio_ref_list])
    
    
    
        useEffect(() => {
            console.log(portfolio_item_list);
        }, [portfolio_item_list])
    
     */









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




    return (
        <div style={{ overflowX: 'scroll', }}>
            <div className='flex ' ref={listRef} id='trying'>
                {portfolio_item_list?.map(item => <SinglePortfolio key={'port-' + item?.title} item={item} />
                )}


            </div>

        </div>
    )
}

export default CategoryDetails