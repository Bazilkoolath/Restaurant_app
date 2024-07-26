import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

function Header() {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Restaurants</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header