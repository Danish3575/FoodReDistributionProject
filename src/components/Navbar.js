import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileIcon from '../assets/profile2.jpg'; // make sure you have this image in assets folder

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Food Redistribution</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link
              as={Link}
              to="#"
              onClick={e => e.preventDefault()}
              style={{ cursor: 'not-allowed', color: 'rgba(255,255,255,0.6)' }}
            >
              Donors
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="#"
              onClick={e => e.preventDefault()}
              style={{ cursor: 'not-allowed', color: 'rgba(255,255,255,0.6)' }}
            >
              Needy
            </Nav.Link>

            <Nav.Link as={Link} to="/area">High-Need Areas</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/help">Help</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Button variant="outline-light" size="sm" as={Link} to="/" className="me-2">
              Login
            </Button>
            <Button variant="light" size="sm" as={Link} to="/" className="me-2">
              Sign Up
            </Button>
            <Link to="/profile">
              <Image
                src={profileIcon}
                alt="Profile"
                roundedCircle
                width="32"
                height="32"
                className="me-2"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
