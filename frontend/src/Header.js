import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">FRONTEND</Navbar.Brand>
                <Nav className="me-auto padding-left-3">
                    {localStorage.getItem("user-info") ? (
                        <>
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
            </Navbar>
        </div>
    );
}

export default Header;
