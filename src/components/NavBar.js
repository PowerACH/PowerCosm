import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../App.css';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/LogIn">LogIn</Nav.Link>
                <Nav.Link href="#Shop">Shop</Nav.Link>
                <Nav.Link href="#Cart">Cart</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
    )
}
