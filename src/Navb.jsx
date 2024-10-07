import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LuMailMinus } from "react-icons/lu";

function Navb() {
    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home" className='logo'><div className="cir"> <LuMailMinus /> </div><p className='logop'>Hello@Dev.impic</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#Linkedin" className='nav-link ann'>Linkedin</Nav.Link>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <Nav.Link href="#Discord" className='nav-link ann'>Discord</Nav.Link>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <Nav.Link href="#Instagram" className='nav-link ann'>Instagram</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb