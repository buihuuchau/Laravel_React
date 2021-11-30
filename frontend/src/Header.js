import DropdownMenu from "@restart/ui/esm/DropdownMenu";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
function Header() {
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem("user-info"));
    console.warn(user);
    function Logout() {
        localStorage.clear();
        history.push("/login");
        console.warn(user);
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">FRONTEND</Navbar.Brand>
                <Nav className="me-auto padding-left-3">
                    {localStorage.getItem("user-info") ? (
                        <>
                            <Nav.Link>
                                <Link to="/list">List Product</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/add">Add Product</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/update">Update Product</Link>
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link>
                                <Link to="/login">Login</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/register">Register</Link>
                            </Nav.Link>
                        </>
                    )}
                </Nav>
                {localStorage.getItem("user-info") ? (
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={Logout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                ) : null}
            </Navbar>
        </div>
    );
}

export default Header;
