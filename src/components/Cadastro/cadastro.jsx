import React, { useState } from "react";
import logo from '../../assets/logo.png';
import cadastro from '../../assets/cadastro.jpg'
import {FaEnvelope } from 'react-icons/fa';


const Cadastro = () => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    return(
        <div className="cadastro">
            <div>
                <img src={cadastro} alt="foto de um cão filhote" />
            </div>
            <div className="formulario-cadastro">
                <form>
                    <img src={logo} alt="ilustração de patinhas de pets" />
                    <h3>DEVIN - ADOÇÃO</h3>
                    <span>Cadastro</span>
                    <input type="text" value={""} placeholder="Nome" />
                    <div className="inputEmailContainer">
                        <input type="text" value={""} placeholder="exemplo@email.com" /><FaEnvelope className="emailIcon"/> 
                    </div>
                    
                    <input type="text" value={""} placeholder="Senha"/>
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
export default Cadastro;