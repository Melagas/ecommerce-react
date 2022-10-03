import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' href="#home" className="tituloPrincipal">
            AVR Cerámica
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/category/nosotros'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/category/contacto'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/category/esmaltenacional'>Esmalte Nacional</Nav.Link>
            <Nav.Link  as={Link} to='/category/esmalteimportado'>Esmalte Importado</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar;