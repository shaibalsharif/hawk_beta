import React, { useEffect, useState } from 'react'
import hawk_logo from '../Assets/images/logo.png'
import { NAV_ITEM_LIST, NAV_PAGE_IMAGES } from '../Assets/data'


const NavPage = ({ setter }) => {
    const [img_index, setImg_index] = useState(0)


    useEffect(() => {
        setInterval(() => {
            if (img_index === NAV_PAGE_IMAGES.length - 1) {
                setImg_index(0)
            }
            else {
                console.log(img_index);
                setImg_index(img_index + 1)
            }
        }, 1000);
    }, [])
    return (
        <div className='nav-container'>
            <div className='nav-header'>
                <img src={hawk_logo} className='logo-img' />
                <svg
                    onClick={() => {
                        setter(false)
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="currentColor" className="nav-close">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>

            <div className='flex justify-evenly h-screen'>
                <div className='w-full h-screen'>
                    <img src={NAV_PAGE_IMAGES[0]} className='object-fill'/>
                </div>
                <div className='w-full'>
                    <ul className='nav-link-container'>
                        {NAV_ITEM_LIST.map(el => {
                            return <li className='nav-link'>{el.name}</li>
                        })}

                    </ul>
                </div>

            </div>


        </div>
    )
}

export default NavPage