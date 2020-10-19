import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const DashBoardNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand> <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-between">
                    {/* <h5 className="ml-5">Add Service</h5> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default DashBoardNav;