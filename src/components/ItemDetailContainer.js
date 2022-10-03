import { useEffect } from "react";
import {Container} from "react-bootstrap"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();

    useEffect (()=>{
        console.log (id);
    }, [id])
   
    return(
    <Container>
        <h1>ItemDetailContainer</h1>;
    </Container>
    )
}
 
export default ItemDetailContainer;