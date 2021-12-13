import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
class Header extends Component {
    Logout = () => {
        localStorage.clear();
        window.location.href = "/Login";
    };
    render() {
        let user = JSON.parse(localStorage.getItem("user-info")); // lay du lieu localstorage doi thanh chuoi gan vao bien
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="">HOME</Navbar.Brand>
                        <Nav className="me-auto">
                            {localStorage.getItem("user-info") ? (
                                <>
                                    <Nav.Link>
                                        <Link to="/AddProduct">AddProduct</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/ListProduct">
                                            ListProduct
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/ListLike">ListLike</Link>
                                    </Nav.Link>
                                    <Nav>
                                        <NavDropdown title={user.name}>
                                            <NavDropdown.Item
                                                onClick={this.Logout}
                                            >
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </>
                            ) : (
                                <>
                                    <Nav.Link>
                                        <Link to="Login">Login</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/Register">Register</Link>
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default Header;
