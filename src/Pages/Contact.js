import React from 'react'
import Footer from '../Components/Shared/Footer'
import Cover from '../Components/Contact/Cover'
import ContactDetails from '../Components/Contact/ContactDetails'
import ContactForm from '../Components/Contact/ContactForm'

const Contact = () => {
    return (
        <div>
            <Cover />
            <ContactDetails />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact