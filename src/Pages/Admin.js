import React, { useState } from 'react'
import { NAV_ITEM_LIST } from '../Assets/data';
import HomeForm from '../Components/Admin/HomeForm'
import AboutForm from '../Components/Admin/AboutForm'
import PortfolioForm from '../Components/Admin/PortfolioForm'
import ServicesForm from '../Components/Admin/ServicesForm'
import ContactForm from '../Components/Admin/ContactForm'
import '../Assets/styles/admin.css'

const Tab = ({ label, isSelected, onClick }) => {
  return (
    <div
      className={`tab ${isSelected ? 'selected' : ''} `}
      onClick={onClick}
    >
      {label}
    </div>
  );
};



const Admin = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='admin-page bg-black min-h-screen w-full'>
      <div className='tabs'>
        {NAV_ITEM_LIST.map((el, index) => <Tab
          key={el.name}
          label={el.name}
          isSelected={selectedTab === index}
          onClick={() => setSelectedTab(index)}
        />)}
      </div>

      <div className='w-full '>
        {selectedTab === 0 && <HomeForm />}
        {selectedTab === 1 && <AboutForm />}
        {selectedTab === 2 && <ServicesForm />}

        {selectedTab === 3 && <PortfolioForm />}
        {selectedTab === 4 && <ContactForm />}
      </div>





    </div>
  )
}

export default Admin