import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sanación Integral</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Acerca de mi</Nav.Link>
      <NavDropdown title="Compras" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Cursos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Meditaciones</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}