import React from 'react'
import Cover from '../Components/Services/Cover'
import Footer from '../Components/Shared/Footer'
import OurWork from '../Components/Services/OurWork'
import ServiceList from '../Components/Services/ServiceList'
import ClientHub from '../Components/Services/ClientHub'


const Services = () => {
    return (
        <div>
            <Cover />
            <OurWork />
            <ServiceList />
            <ClientHub />
            <Footer />
        </div>
    )
}

export default Services