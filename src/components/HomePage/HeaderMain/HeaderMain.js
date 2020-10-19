import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import topBanner from '../../../images/logos/frame.png'
import './headerMain-style.css'

const HeaderMain = () => {
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <div className="main-content">
                        <h1 className="main_heading">Let’s Grow Your 
                        Brand To The Next Level</h1>
                        <p className="description ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className="main-btn">Hire Me</button>
                    </div>
                </Col>

                <Col md={7}>
                    <img className="img-fluid" src={topBanner} alt="Top Banner"/>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderMain;