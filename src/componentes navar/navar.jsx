import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './stylecomponentes.css';

function ColorSchemesExample() {
  return (
    <Container className='container_navbar'>
      <Navbar variant="dark" id='navbarboots'>
          <Nav className="me-auto">
            <Nav.Link href="#home">NEWS + FEATURES</Nav.Link>
            <Nav.Link href="#features">VIDEO</Nav.Link>
            <Nav.Link href="#pricing">FILMS</Nav.Link>
            <Nav.Link href="#pricing">SERIES</Nav.Link>
            <Nav.Link href="#pricing">INTERACTIVE</Nav.Link>
            <Nav.Link href="#pricing">COMMUNITY</Nav.Link>
            <Nav.Link href="#pricing">DATABANK</Nav.Link>
            <Nav.Link href="#pricing">DISNEY+</Nav.Link>
          </Nav>
      </Navbar>
      <br />
    </Container>
  );
}

export default ColorSchemesExample;