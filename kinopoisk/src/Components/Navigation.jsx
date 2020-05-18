import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Navigation = () =>{
    return <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Kinopoisk</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#new">NEW</Nav.Link>
                    <Nav.Link href="#genre">Genre</Nav.Link>
                    <NavDropdown title="Languages" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#language/kz">kz</NavDropdown.Item>
                        <NavDropdown.Item href="#language/en">en</NavDropdown.Item>
                        <NavDropdown.Item href="#language/ru">ru</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#login">Log in</Nav.Link>
                    <Nav.Link href="#registration">Registration</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
}

export default Navigation;