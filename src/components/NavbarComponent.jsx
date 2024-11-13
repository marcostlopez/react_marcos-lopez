import CartWidget from "./Cartwidget"
const NavbarComponent = () =>{
    return(
        <div>
            <h1>TIENDA-MARCOS</h1>

            <nav className="navContainer">
                <a className="navLinks">
                    Inicio
                </a>

                <a className="navLinks">
                    Ofertas
                </a>
                <a className="navLinks">
                    Productos
                </a>
                <a className="navLinks">
                    Carrito
                </a>
                <CartWidget counter={14} saludo={"Hola Crack!"}/>
            </nav>
        </div>
    )
}

export default NavbarComponent