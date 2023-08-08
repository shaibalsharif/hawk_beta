import React, { useEffect, useState } from 'react'
import hawk_logo from '../Assets/images/logo.png'
import { NAV_ITEM_LIST, NAV_PAGE_IMAGES } from '../Assets/data'
import { useNavigate } from 'react-router-dom'


const NavPage = ({ setter }) => {
    const [img_index, setImg_index] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (img_index === NAV_PAGE_IMAGES.length - 1) {
                setImg_index(0)
            }
            else {

                setImg_index(img_index + 1)
            }
        }, 1500);
    }, [])


    const handleNavClick = (e) => {

        if (e.target.innerHTML === 'home') {
            navigate('/')

        } else {
            navigate(`/${e.target.innerHTML}`)
        }
        setter(false)

    }
    return (
        <div className='nav-container'>


            <div className='flex justify-evenly h-screen'>
                <div className='hidden w-full h-screen md:block'>
                    <img src={NAV_PAGE_IMAGES[img_index]} className='object-fill' />
                </div>
                <div className='w-full relative'>
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
                    <ul className='nav-link-container'>
                        {NAV_ITEM_LIST.map(el => {
                            return <li value={el.name} className='nav-link' onClick={handleNavClick}>{el.name}</li>
                        })}
                        <li value={'admin'} className='nav-link' onClick={handleNavClick}>{'Admin'}</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default NavPage