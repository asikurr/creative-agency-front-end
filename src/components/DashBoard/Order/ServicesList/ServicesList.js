import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import DashBoardNav from '../../DashBoard/DashBoardNav';
import Sidebar from '../../SideBar/Sidebar';
import ServiceListSingle from './ServiceListSingle';

const ServicesList = () => {

    const [customerServicesList, setCustomerServicesList] = useState([])

    useEffect(() => {
        fetch('https://arcane-sierra-56056.herokuapp.com/getOrder')
            .then(res => res.json())
            .then(data => setCustomerServicesList(data))
    }, [])

    return (
        <>

            <DashBoardNav />
            <div className="d-flex">
                <Sidebar />
               <div className="d-flex flex-wrap">
                    {
                        customerServicesList.map(customerService =>
                            <ServiceListSingle
                                key={customerService._id}
                                customerService={customerService}
                            />)
                    }
               </div>
            </div>
        </>
    );
};

export default ServicesList;