import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
    return ( <Card>
        <Card.Img variant="top" src="holder.js/100x180"/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card> );
}
 
export default Item;