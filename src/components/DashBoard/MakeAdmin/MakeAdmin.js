import React, { useState} from 'react';
import { Col } from 'react-bootstrap';
import DashBoardNav from '../DashBoard/DashBoardNav';
import Sidebar from '../SideBar/Sidebar';

const MakeAdmin = () => {

    const [adminInfo, setAdminInfo] = useState({})

    const handleAdminInfo = (e) => {
        const newAdminInfo = { ...adminInfo }
        newAdminInfo[e.target.name] = e.target.value
        setAdminInfo(newAdminInfo)
    }


    const handleFormSubmit = () => {

        fetch('https://arcane-sierra-56056.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(adminInfo)
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
                            <label htmlFor="email">Make Admin</label>
                            <input onBlur={handleAdminInfo} type="email" name="email" placeholder="Enter Email Address" className="form-control" />
                        </div>

                        <button className="btn btn-success">Submit</button>
                    </form>
                </Col>
            </div>
        </>
    );
};

export default MakeAdmin;