import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import './style.css'


const Navbar = () => {

    return (
        <nav className="navbar">
            <img src={logo} alt="logo ilustração de patinhas de pets" />
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