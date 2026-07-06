import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import App from './App.jsx';
import App1 from './App1.jsx';
import App2 from './App2.jsx';

function TopNavigator() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">TL Enterprise LLC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/app">Accounting</Nav.Link>
            <Nav.Link as={Link} to="/app1">IT Counseling</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavigator;