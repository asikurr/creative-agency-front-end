import React from 'react';
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './work-section-style.css'

import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'

const WorkSection = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="work-section py-5 my-5">
            <Container>
                <h3 className="py-5 text-center"><span style={{ color: '#fff' }}>Here are some of</span> <span style={{ color: '#7AB259' }}>our works</span> </h3>
                <Row>
                    <div className="col">
                        <Slider {...settings}>

                            <div >
                                <img src={carousel1} className="imgHeight" alt="..." />

                            </div>

                            <div >
                                <img src={carousel2} className="imgHeight" alt="..." />

                            </div>


                            <div >
                                <img src={carousel3} className="imgHeight" alt="..." />

                            </div>

                            <div >
                                <img src={carousel4} className="imgHeight" alt="..." />

                            </div>

                        </Slider>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default WorkSection;