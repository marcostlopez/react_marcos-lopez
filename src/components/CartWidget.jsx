const CartWidget = ({saludo}) => {
    // console.log(props)
    return(
        <div className="cartWidgetContainer">
            <img src="./icons8-carrito-de-compras-64.png" alt="carrito"/>
            <p className="cartCount">{saludo}</p>
        </div>
    )
}

export default CartWidget