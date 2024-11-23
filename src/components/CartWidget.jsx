import { HiShoppingCart } from "react-icons/hi";
import { Badge } from "react-bootstrap";
const CartWidget = () => {
    return(
        <div>
            <HiShoppingCart fontSize={'2rem'} color='green' />
            <Badge bg="secondary">7</Badge>
        </div>
    )
}

export default CartWidget