import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const products = [
  {id: 1, name:'taza', description:'string', stock:'number'},
  {id: 2, name:'mate', description:'string', stock:'number'},
  {id: 3, name:'ensaladera', description:'string', stock:'number'},
  {id: 4, name:'bandeja', description:'string', stock:'number'}
]

const ItemListContainer = ({ greeting }) => {
    const { categoryName } = useParams();
  
    useEffect(() => {
      console.log(categoryName);
    }, [categoryName])
  
    return (
      <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList products={products} />
      </Container>
    );
  }

export default ItemListContainer;