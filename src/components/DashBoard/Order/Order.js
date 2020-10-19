import React, { useState} from 'react';
import { Col } from 'react-bootstrap';
import DashBoardNav from '../DashBoard/DashBoardNav';
import Sidebar from '../SideBar/Sidebar';


const Order = () => {

    const [orderInfo, setOrderInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleOrderInfo = (e) => {
        const newOrderInfo = { ...orderInfo }
        newOrderInfo[e.target.name] = e.target.value
        setOrderInfo(newOrderInfo)
    }

    const handleImageFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleFormSubmit = () => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', orderInfo.name)
        formData.append('email', orderInfo.email)
        formData.append('serviceName', orderInfo.serviceName)
        formData.append('projectDetails', orderInfo.projectDetails)
        formData.append('price', orderInfo.price)
        
        fetch('https://arcane-sierra-56056.herokuapp.com/addOrder', {
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

            <DashBoardNav />
            <div className="d-flex">
                <Sidebar />
                <Col md={6} className="mt-5">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <input onBlur={handleOrderInfo} type="text" name="name" placeholder="Your Name/Company Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleOrderInfo} type="text" name="email" placeholder="Your email address" id="" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input onBlur={handleOrderInfo} type="text" name="serviceName" placeholder="Service Name" id="" className="form-control" />
                        </div>

                        <div className="form-group">
                            <textarea onBlur={handleOrderInfo} name="projectDetails" placeholder="Project Details" id="" className="form-control" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleOrderInfo} type="number" name="price" placeholder="Price" id="" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input type="file" onChange={handleImageFile} name="file" />
                        </div>
                        <button className="btn btn-success">Send</button>
                    </form>
                </Col>
            </div>
        </>
    );
};

export default Order;