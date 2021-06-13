import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class Rutas extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dondeEstamos">Donde estamos</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/formAdd">Nuevo</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Buscar"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Rutas;
