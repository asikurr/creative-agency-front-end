import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceListSingle = ({customerService}) => {
   
    return (
        <Col md={4} className="mt-2">
            <div className="card" >
                <img src={`data:image/png;base64,${customerService.image.img}`} className="imgSize mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="sevice-title">{customerService.serviceName}</h5>
                    <p className="sevice-description">{customerService.projectDetails}</p>

                </div>
            </div>
        </Col>
    );
};

export default ServiceListSingle;