import React, { useEffect, useState} from 'react';
import Loader from 'react-loader-spinner'
import { Container, Row } from 'react-bootstrap';
import CardSingle from './CardSingle';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Services = () => {

    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('https://arcane-sierra-56056.herokuapp.com/getServices')
        .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <section className="service-section my-5 py-5">
            <Container>
                <h3 className="py-5 text-center">Provide awesome <span style={{ color: '#7AB259' }}>services</span> </h3>
                <Row>
                        {
                             allServices.length === 0 && <Loader className="mx-auto" type="Circles" color="#00BFFF" height={80} width={80} />
                        }
                        {
                            allServices.map(service => <CardSingle key={service._id} service={service} />)
                        }
        
                   
                </Row>
            </Container>
        </section>
    );
};

export default Services;