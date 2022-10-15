import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import {doc, getFirestore, getDoc, collection, getDocs } from 'firebase/firestore';

function App() {
  //acceso a un documento especifico -> detail
  useEffect(()=> {
    const database =getFirestore();
    const itemReference = doc(database, 'items', '3vnjE6HDrJGMCvxoOsNQ');
    getDoc(itemReference)
    .then((snapshot)=>{
      if(snapshot.exists()){
      const item = {
        id: snapshot.id,
        ...snapshot.data()
      };
      console.log (item);
    }
    })
    .catch(error => console.warn(error))
  }, []);

  //acceso a una coleccion -> list
  useEffect(()=> {
    const database = getFirestore();

    const collectionReference = collection(database, 'items');

    getDocs(collectionReference)
    .then((snapshot)=>{
const list = snapshot
.docs
.map((doc) =>({
id: doc.id,
...doc.data()
}));
console.log (list);
})
    .catch(error => console.warn(error))
  }, [])

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
