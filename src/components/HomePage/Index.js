import React from 'react';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import ContactUs from './ContactUs/ContactUs';
import FeedBack from './FeedBack/FeedBack';
import Header from './Header/Header';
import Services from './Services/Services';
import WorkSection from './WorkSection/WorkSection';

const Index = () => {
    return (
        <>
            <Header/>
            <CompanyLogo/>
            <Services/>
            <WorkSection/>
            <FeedBack/>
            <ContactUs/>
        </>
    );
};

export default Index;