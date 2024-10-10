import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LuMailMinus } from "react-icons/lu";

function Navb() {
    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home" className='logo'><div className="cir"> <LuMailMinus /> </div><p className='logop'>aryaa</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">


                        <ul>
                            <li className='ann try'> <a href="#about"> About </a></li>
                            <li className='ann try'> <a href="#service">Service </a></li>
                            <li className='ann try'><a href="#Project">Project</a></li>
                            <li className='ann try'><a href="#Community"> Community</a></li>
                            <li className='ann try'><a href="#Contact">Contact</a></li>
                        </ul>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb