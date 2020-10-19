import React from 'react';
import { Link } from 'react-router-dom';

import './services-style.css'




const CardSingle = ({service}) => {

   

    return (
       
            <div className="col-md-4 text-center">
            <Link to="/addservice">
                <div className="card animate-img" >
                    <img src={`data:image/png;base64,${service.image.img}`} className="imgSize mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="sevice-title">{service.title}</h5>
                        <p className="sevice-description">{service.description}</p>

                    </div>
                </div>
            </Link>
            </div>
       
       
        
    );
};

export default CardSingle;