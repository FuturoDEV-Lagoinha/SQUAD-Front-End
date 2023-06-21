import React, { useState } from "react";
import logo from '../../assets/logo.png';
import cadastro from '../../assets/cadastro.jpg';
import {FaEnvelope, FaLock, FaUserCircle} from 'react-icons/fa';
import './style.css';

const Cadastro = () => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    return(
        <div className="cadastro">
            <div className="imgCadastro">
                <img src={cadastro} alt="foto de um cão filhote" />
            </div>
            <div className="formularioCadastro">
                <form>
                    <img src={logo} alt="ilustração de patinhas de pets" />
                    <h3>DEVIN - ADOÇÃO</h3>
                    <span>Cadastro</span>
                    
                    <div className="inputNomeContainer">
                        <input type="text" value={""} placeholder="Nome" /><FaUserCircle className="nomeIcon"/>
                    </div>
                    <div className="inputEmailContainer">
                        <input type="text" value={""} placeholder="exemplo@email.com" /><FaEnvelope className="emailIcon"/> 
                    </div>
                    <div className="inputSenhaContainer">
                        <input type="text" value={""} placeholder="Senha"/><FaLock className="senhaIcon"/>
                    </div>
                    
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
export default Cadastro;