import { useContext, useState} from "react";
import {Container, Table, Button} from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { BsFillTrashFill } from 'react-icons/bs';
import './Cart.css';
import {Link} from "react-router-dom";
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";

const buyerMock = {
  name: 'coderhouse',
  phone: '1234567890',
  email: 'coderhouse@mail.com'
}

const  Cart= () => {
    const {cart, total, removeItem, clear} = useContext (CartContext);
    const [user, setUser] = useState(buyerMock);
    const [showModal,setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();

    const handleRemove = (itemId) => {
        removeItem(itemId);
    }

    const handleOpen = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    const handleBuy = async () => {
      const newOrder = {
        buyer: buyerMock,
        items: cart,
        total
      };
      console.log(newOrder);
      createOrder(newOrder)
      const newOrderId = await createOrder (newOrder);
      console.log(newOrderId);
      setOrderId(newOrderId);
      clear();
    }

    const showTable = cart.length > 0

    return ( 
        <Container className="cartContainer">
        <h1 className="titleCart">Carrito</h1>
        {showTable && (
            <>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Título</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((item)=>(
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td><BsFillTrashFill onClick={() => handleRemove(cart[0].id)}/></td>
        </tr>
      ))}
      </tbody>
    </Table>
    <h3> Total: ${total}</h3>
    <Button className="buttonCart" variant="success" onClick={handleOpen}>Finalizar compra</Button>
    </>
        )}
    {!showTable && (
     <>
       <h3 className="subtitleCart">Carrito de compra vacio</h3>
       <Link to='/' className="bottonBack">
         <Button variant="dark">Ver productos</Button>
       </Link>
      </>
    )}
    <OrderModal 
      showModal={showModal} 
      onClose={handleClose} 
      onBuy={handleBuy} 
      orderId={orderId}
    />
    </Container>
     );
}
 
export default Cart;