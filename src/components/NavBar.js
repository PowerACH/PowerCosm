import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../App.css';

export default function NavBar() {
    return (
        <Navbar className = "navBar" collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Navbar.Brand className = "brand-Logo" href="/">POWER BEAUTY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ml-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/LogIn">LOGIN</Nav.Link>
                    <Nav.Link href="/Shop">SHOP</Nav.Link>
                    <Nav.Link href="#Cart">CART</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
    )
}
