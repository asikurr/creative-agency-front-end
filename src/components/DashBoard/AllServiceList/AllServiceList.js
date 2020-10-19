import React, {useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';
import DashBoardNav from '../DashBoard/DashBoardNav';
import Sidebar from '../SideBar/Sidebar';

const AllServiceList = () => {

    const [allServiceStatus, setAllServiceStatus] = useState([])

    useEffect(() => {
        fetch('https://arcane-sierra-56056.herokuapp.com/getAllServiceStatus')
            .then(res => res.json())
            .then(data => setAllServiceStatus(data))
    }, [])

    return (
        <>

            <DashBoardNav />
            <div className="d-flex">
                <Sidebar />
                <Col>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">EmailID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allServiceStatus.map(serviceStatus => (
                                    <tr key={serviceStatus._id}>
                                        <td>{serviceStatus.name}</td>
                                        <td>{serviceStatus.email}</td>
                                        <td>{serviceStatus.serviceName}</td>
                                        <td>{serviceStatus.projectDetails}</td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Col>
            </div>
        </>
    );
};

export default AllServiceList;