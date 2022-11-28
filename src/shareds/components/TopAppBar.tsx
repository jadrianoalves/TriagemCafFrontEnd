import React from 'react';
import { Navbar, Container } from 'react-bootstrap';




 const  TopAppBar = () => {
 
  return (
    <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default TopAppBar