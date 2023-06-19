import React, { useState } from "react";
//import logo from './assets/logo.png'
import {FaEnvelope } from 'react-icons/fa';

const Cadastro = () => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    return(
        <div className="cadastro">
            <div>
                <img src="" alt="foto de um cão filhote" />
            </div>
            <div className="formulario-cadastro">
                <form>
                    <img src="" alt="ilustração de patinhas de pets" />
                    <p>Cadastro</p>
                    <input type="text" value={""} placeholder="Nome" />
                    {/* <input type="text" value={""} placeholder="exemplo@email.com" <FaEnvelope/>/> */}
                    <input type="text" value={""} placeholder="Senha"/>
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
export default Cadastro;