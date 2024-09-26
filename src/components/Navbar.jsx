import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatNumber } from "../components/CambioM";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function NavbarA() {
  const { total } = useContext(CartContext) || {};
  const token = true;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand >PizzaMIA!</Navbar.Brand>
          <Button className="btn btn-outline-light me-5" variant="outline-light"  >
            <Link to="/"> 🏠Home</Link>
          </Button>
          {token ? (
            <>
             <Button className="btn btn-outline-light me-2" variant="outline-light">
                <NavLink to="/Loggin">🔐Login</NavLink>
              </Button>
              <Button className="btn btn-outline-light me-2" variant="outline-light" >
                <Link to="/Register">🔐Register</Link>
              </Button>
              <Button className="btn btn-outline-light me-2" variant="outline-light" >             
              <NavLink to="/Profile" >
                  🔓Profile
                </NavLink>
              </Button>
             
            </>
          ) : (
            <>
              <Button className="btn-sm" variant="outline-light" >
                <Link to="/LoginPage">🔐Login</Link>
              </Button>
              <Button
                className="btn-sm"
                variant="outline-light"
                
              >
                <Link to="/RegisterPage">🔐Register</Link>
              </Button>
              <Button className="btn btn-outline-light me-2" variant="outline-light" >
                <Link to="/loggin">🔒Logout</Link>
              </Button>
            </>
          )}
        </Nav>
        {token && (
          <Button className="btn btn-outline-light me-2" variant="outline-info" >
            <Link to="/Cart">🛒Total: {formatNumber(total)}</Link>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarA;