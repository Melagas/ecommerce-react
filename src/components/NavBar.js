import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget";
import './CartWidget.css';
import './ItemListContainer.css';
import './NavBar.css'
//import Logo from  '../assets/img/logo.png';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="tituloPrincipal">
            AVR Cerámica
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" id="navCategorias">Home</Nav.Link>
            <Nav.Link href="#nosotros" id="navCategorias">Nosotros</Nav.Link>
            <Nav.Link href="#contacto" id="navCategorias">Contacto</Nav.Link>
            <Nav.Link href="#nacional" id="navCategorias">Esmalte Nacional</Nav.Link>
            <Nav.Link href="#importado" id="navCategorias">Esmalte Importado</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar;