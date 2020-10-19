import React, { useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import DashBoardNav from '../DashBoard/DashBoardNav';
import Sidebar from '../SideBar/Sidebar';

const AddService = () => {

    const [serviceInfo, setServiceInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleServiceInfo = (e) => {
        const newServiceInfo = { ...serviceInfo }
        newServiceInfo[e.target.name] = e.target.value
        setServiceInfo(newServiceInfo)
    }

    const handleImageFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleFormSubmit = () => {
        
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceName', serviceInfo.serviceName)
        formData.append('description', serviceInfo.description)
        console.log(file, serviceInfo.serviceName, serviceInfo.description)
        fetch('https://arcane-sierra-56056.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
           
    }


    return (
        <>
    
            <DashBoardNav/>
            <div className="d-flex">
                <Sidebar />
                <Col md={6} className="mt-5">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="serviceName">Service Title</label>
                            <input onBlur={handleServiceInfo} type="text" name="serviceName" placeholder="Service Title" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="serviceDescription">Service Description</label>
                            <textarea onBlur={handleServiceInfo} name="description" id="" className="form-control" rows="5"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="serviceIcon">Service Icon</label> <br/>
                            <input type="file" onChange={handleImageFile} name="file" />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </Col>
            </div>
        </>
    );
};

export default AddService;