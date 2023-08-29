import React, { useEffect, useState } from 'react'
import Footer from '../Components/Shared/Footer'
import Cover from '../Components/Contact/Cover'
import ContactDetails from '../Components/Contact/ContactDetails'
import ContactForm from '../Components/Contact/ContactForm'
import { getContactPageContent } from '../Firebase/firebase_utils'

const Contact = () => {
    const [coverData, setCoverData] = useState(null)
    const [innerPageData, setInnerPageData] = useState(null)
    const [servicesListData, setServicesListData] = useState(null)
    const [clientListData, setClientListData] = useState(null)


    useEffect(() => {
        getContactPageContent('contact', 'cover', setCoverData)
        getContactPageContent('contact', 'inner_page', setInnerPageData)
    }, [])
    return (
        <div>
            <Cover data={coverData} />
            <ContactDetails data={innerPageData} />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact