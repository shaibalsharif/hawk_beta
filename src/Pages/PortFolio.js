import React from 'react'
import Footer from '../Components/Shared/Footer'
import Cover from '../Components/About/Cover'
import { PORTFOLIO_LIST } from '../Assets/data'
import SinglePortfolio from '../Components/Portfolio/SinglePortfolio'
import '../Assets/styles/portfolio.css'


const PortFolio = () => {
  return (
    <div style={{ overflowX: 'scroll', }}>
      <div className='flex '>
        {PORTFOLIO_LIST.map(item =><SinglePortfolio key={'port-'+item?.id} item={item} />
        )}

      </div>

    </div>
  )
}

export default PortFolio