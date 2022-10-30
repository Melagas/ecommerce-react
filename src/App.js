import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
<BrowserRouter basename='/ecommerce-react'>
  <CartProvider>
    <NavBar />
     <Routes>
       <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
       <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
       <Route path='/item/:id' element={<ItemDetailContainer/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/checkout' element={<Checkout/>} />
     </Routes>
  </CartProvider>
    <Footer/>
</BrowserRouter>
  );
  }

export default App;
