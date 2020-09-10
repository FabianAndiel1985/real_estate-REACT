import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function Navigation(props) {
  return (
	<Navbar bg="light" expand="lg">
	  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="/">Home</Nav.Link>
	      <Nav.Link href="#team">Team</Nav.Link>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
  	)
}

export default Navigation;