import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut=() => {
    logOut()
    .than()
    .catch(error=>console.log(error))
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto align-items-center mb-4">
              <Link className="text-decoration-none text-body" to="/category/0">
                Home
              </Link>

              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>

            <Nav>
              {user && (
                <FaUserCircle
                  className="me-2 mt-1"
                  style={{ fontSize: "2rem" }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
