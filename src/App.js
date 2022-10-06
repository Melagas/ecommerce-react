import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';



function App() {
  return (
    <BrowserRouter basename='/ecommerce-react'>
<NavBar />
<Routes>
<Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
<Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
<Route path='/item/:id' element={<ItemDetailContainer/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/checkout' element={<Checkout/>} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
