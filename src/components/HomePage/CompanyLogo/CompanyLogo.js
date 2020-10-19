import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slack from '../../../images/logos/slack.png'
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netFlix from '../../../images/logos/netflix.png'

import './company-logo-style.css'



const CompanyLogo = () => {
   
    return (

        <section>
            <Container className="py-5 my-5">
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between company-logo">
                            <img className="img-fluid companyLogo" src={slack} alt="slack" />
                            <img className="img-fluid companyLogo" src={airbnb} alt="airbnb" />
                            <img className="img-fluid companyLogo" src={google} alt="google" />
                            <img className="img-fluid companyLogo" src={uber} alt="uber" />
                            <img className="img-fluid companyLogo" src={netFlix} alt="netFlix" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>


    );
};

export default CompanyLogo;