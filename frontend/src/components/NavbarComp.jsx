import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, FormControl, Button } from 'react-bootstrap'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


export default class NavbarComp extends Component {
  render() {

    return (
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand href="#home">Shoe Game .COM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Mens">Mens</Nav.Link>
                <Nav.Link href="#Womens">Womens</Nav.Link>
                  
                <Nav.Link href="#Kids">Kids</Nav.Link>
                <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><SignUpForm/> </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Log In" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><LoginForm/></NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    )
  }
}
