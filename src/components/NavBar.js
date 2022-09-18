import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Logo from  '../assets/img/logo.png';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            AVR Cerámica
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Todos los productos</Nav.Link>
            <Nav.Link href="#features">Esmalte Nacional</Nav.Link>
            <Nav.Link href="#pricing">Esmalte Importado</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;