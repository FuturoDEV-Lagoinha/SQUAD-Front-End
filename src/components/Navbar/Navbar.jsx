import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/estoque'>Estoque</Link>
                </li>
                <li>
                    <Link to='/produto'>Produtos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;