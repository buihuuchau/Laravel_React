import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="Login">Login</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/Register">Register</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/AddProduct">AddProduct</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/ListProduct">ListProduct</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default Header;
