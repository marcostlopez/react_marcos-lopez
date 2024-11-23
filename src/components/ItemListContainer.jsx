import { Button } from "react-bootstrap"

const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <h1>{greeting}</h1>
            <Button variant="primary">Primary</Button>
        </div>
    )
}

export default ItemListContainer