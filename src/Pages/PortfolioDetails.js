import React, { useEffect, useState } from 'react'
import Cover from '../Components/Portfolio/Cover'
import { useHref, useParams } from 'react-router-dom'
import { PORTFOLIO_LIST } from '../Assets/data'
import NestedPage from '../Components/Portfolio/NestedPage'
import Footer from '../Components/Shared/Footer'
import { fetchPortFolioData, getEmbedLink } from '../Firebase/firebase_utils'
const PortfolioDetails = () => {

    const id = useParams().id
    const category = useParams().category


    // const item = PORTFOLIO_LIST.filter(item => item.category_name.toLowerCase() == category)[0]
    // const portfolioItem = item.content.filter(el => id == el.id)[0]

    const [data, setData] = useState()

    useEffect(() => {

        fetchPortFolioData('portfolio', id, setData)
    }, [])





    return (
        <div>
            {data ? (<div>
                <Cover
                    image={getEmbedLink(data.cover_background.type=='g-drive'?data.cover_background.url:"")}
                    title={data.cover_title}
                    client={data.client}
                    year={data.year}
                    role={data.role}
                />

                <div className='h-screen items-start
             md:px-[20%] 
            bg-dark-1 pl-8 '>
                    <div className='pt-96 flex flex-col justify-center gap-16 md:flex-row md:items-start '>
                        <ul className='w-full ml-4 uppercase space-y-4 text-yellow-2 text-xs' style={{ listStyleType: 'inherit' }} >
                            {data.points.map(el => (<li><p className=' text-white'>{el}</p></li>))}
                        </ul>

                        <div>
                            {data.content_description}
                        </div>
                    </div>

                </div>
                <div className='w-full bg-white  min-h-screen space-y-4 pt-10 pb-8'>
                    {data.content_list.map(item => (<NestedPage item={getEmbedLink(item.type=='g-drive'?item.url:"")} />))}
                </div>

                <div className='min-h-screen w-full bg-dark-1  flex justify-center items-center'>
                    <div className='mx-4 md:mx-24 text-justify  flex flex-col-reverse md:flex-row md:items-start  items-center gap-8 justify-center md:justify-around'>


                        <div className='text-xs text-center md:w-[80%] md:text-start space-y-1'>
                            <p className='font-bold'>{data.creator_section_name}</p>
                            <p>{data.creator_section_position}</p>
                            <p>{data.creator_section_company}</p>
                        </div>
                        <div>
                            <p>"{data.creator_section_description}"</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>) : <></>}
        </div>
    )
}

export default PortfolioDetails