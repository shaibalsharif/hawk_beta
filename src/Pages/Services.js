import React, { useEffect, useState } from 'react'
import Cover from '../Components/Services/Cover'
import Footer from '../Components/Shared/Footer'
import OurWork from '../Components/Services/OurWork'
import ServiceList from '../Components/Services/ServiceList'
import ClientHub from '../Components/Services/ClientHub'
import { getServicePageContent, } from '../Firebase/firebase_utils'


const Services = () => {


    const [coverData, setCoverData] = useState(null)
    const [innerPageData, setInnerPageData] = useState(null)
    const [servicesListData, setServicesListData] = useState(null)
    const [clientListData, setClientListData] = useState(null)


    useEffect(() => {
        getServicePageContent('services', 'cover', setCoverData)
        getServicePageContent('services', 'inner_page', setInnerPageData)
        getServicePageContent('services','services_list',setServicesListData)
        getServicePageContent('services','client_list',setClientListData)
    }, [])
 /*      useEffect(() => {
          console.log(servicesListData);
      }, [servicesListData]) */

    return (
        <div>
            <Cover coverData={coverData} />
            <OurWork data={innerPageData} />
            <ServiceList data={servicesListData} />
            <ClientHub data={clientListData} />
            <Footer />
        </div>
    )
}

export default Services