import React, { useEffect, useState } from 'react'
import Cover from '../Components/Portfolio/Cover'
import { useHref } from 'react-router-dom'
import { PORTFOLIO_LIST } from '../Assets/data'
import NestedPage from '../Components/Portfolio/NestedPage'
import Footer from '../Components/Shared/Footer'
import NestedPage1 from '../Components/Portfolio/NestedPage1'
import NestedPage2 from '../Components/Portfolio/NestedPage2'
const PortfolioDetails = () => {

    const id = useHref().split('/')[2]
    const portfolioItem = PORTFOLIO_LIST.filter(item => item.id == id)[0]

    console.log(portfolioItem);


    return (
        <div>
            <Cover image={portfolioItem.content.cover_background}
                title={portfolioItem.content.title}
                client={portfolioItem.content.client}
                year={portfolioItem.content.year}
                role={portfolioItem.content.role}
            />

            <div className='h-screen items-start
             md:px-[20%] 
            bg-dark-1 pl-8 '>
                <div className='pt-96 flex flex-col justify-center gap-16 md:flex-row md:items-start '>
                    <ul className='w-full ml-4 uppercase space-y-4 text-yellow-2 text-xs' style={{ listStyleType: 'inherit' }} >
                        {portfolioItem.content.takeaways.map(el => (<li><p className=' text-white'>{el}</p></li>))}
                    </ul>

                    <div>
                        {portfolioItem.content.description}
                    </div>
                </div>

            </div>

            {portfolioItem.content.nestings.map(item => {

                return !item.type ? (<NestedPage item={item} />)
                    : item.type === 'cover' ? (<NestedPage1 item={item} />) :
                        item.type === 'single' ? (<NestedPage2 item={item}/>) : <></>
            }

            )}

            <Footer />
        </div>
    )
}

export default PortfolioDetails