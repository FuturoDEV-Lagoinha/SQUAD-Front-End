import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/cadastro'>Cadastro</Link>
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