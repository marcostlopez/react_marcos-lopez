import React from 'react';
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link>Ecommerce</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link>Inicio</Link>
                </li>
                <li>
                    <Link>Productos</Link>
                </li>
                <li>
                    <Link>Carrito</Link>
                </li>
                <li>
                    <Link>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;