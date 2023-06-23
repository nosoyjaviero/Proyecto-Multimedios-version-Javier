import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './stylecomponentes.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navbarFondo'  variant="dark">
        
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
    </>
  );
}

export default ColorSchemesExample;