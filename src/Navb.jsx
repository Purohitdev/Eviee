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
                        <a href="https://www.linkedin.com/in/arya-shendge-011a11328/" target='_blank' className='nav-link ann try '>Linkedin</a>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <a href="https://www.community.impic.tech/" target='_blank'className='nav-link ann try '>Discord</a>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <a href="https://github.com/aryaaaaaS" target='_blank'  className='nav-link ann try '>Github</a>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb