import React, { useState } from "react";
import logo from '../../assets/logo.png';
import cadastro from '../../assets/cadastro.jpg';
import {FaEnvelope, FaLock, FaUserCircle} from 'react-icons/fa';
import './style.css';

const Cadastro = () => {

    // const [usuario, setUsuario] = useState({
    //     nome:"",
    //     email:"",
    //     senha:""
    // });
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    // const cadastrarUsuario = () => {
    //     fetch(`http://localhost:8080/usuario`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(usuario),
    //     });
    //     console.log(usuario);
    // }
    
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
                        <input 
                        type="text" 
                        value={nome} 
                        placeholder="Nome" 
                        onChange={(evento) => setNome(evento.target.value) } /><FaUserCircle className="nomeIcon"/>
                    </div>
                    <div className="inputEmailContainer">
                        <input 
                        type="text" 
                        value={email} 
                        placeholder="exemplo@email.com" 
                        onChange={(evento) => setEmail(evento.target.value) } /><FaEnvelope className="emailIcon"/> 
                    </div>
                    <div className="inputSenhaContainer">
                        <input 
                        type="text" 
                        value={senha} 
                        placeholder="Senha"
                        onChange={(evento) => setSenha(evento.target.value) }/><FaLock className="senhaIcon"/>
                    </div>
                    
                    <button onClick={""}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
export default Cadastro;