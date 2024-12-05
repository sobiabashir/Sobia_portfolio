import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#">Sobia Bashir</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link><Link to="about" smooth duration={100}>About</Link></Nav.Link>
          <Nav.Link><Link to="skills" smooth duration={500}>Skills</Link></Nav.Link>
          <Nav.Link><Link to="projects" smooth duration={500}>Projects</Link></Nav.Link>
          <Nav.Link><Link to="experience" smooth duration={500}>Experience</Link></Nav.Link>
          <Nav.Link><Link to="education" smooth duration={500}>Education</Link></Nav.Link>
          <Nav.Link><Link to="contact" smooth duration={500}>Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
