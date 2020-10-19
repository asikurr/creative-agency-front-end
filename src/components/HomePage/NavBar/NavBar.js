import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './navbar-style.css'

const NavBar = () => {
    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand> <Link to="/"><img src={logo} className="logo" alt="logo" /></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/">Our Portfolio</NavLink>
                        <NavLink className="nav-link" to="/">Our Team</NavLink>
                        <NavLink className="nav-link" to="/">Contact Us</NavLink>
                        <div className="login-btn">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </div>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;