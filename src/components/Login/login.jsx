import React, { useState } from "react";
import login from '../../assets/login.jpg';
import logo from '../../assets/logo.png';
import { FaEnvelope, FaLock} from "react-icons/fa";
import './style.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const emailDoUsuario = (event) => {
        setEmail(event.target.value);
    };

    const senhaDoUsuario = (event) => {
        setSenha(event.target.value);
    }

    return (

        <div className="login">
            <div>
                <img src={login} alt="foto de cães e gatos" />
            </div>
            <div className="formularioLogin">
                <form>
                    <img src={logo} alt="logo ilustração de patinhas de pets" />
                    <h3>DEVIN - ADOÇÃO</h3>
                    <span>Seja bem vindo</span>
                    
                    <div className="inputEmailContainer">
                        <input type="text" value={""} placeholder="exemplo@email.com" /><FaEnvelope className="emailIcon"/> 
                    </div>
                    <div className="inputSenhaContainer">
                        <input type="text" value={""} placeholder="Senha"/><FaLock className="senhaIcon"/>
                    </div>
                    
                    <button>Entrar</button>
                    <a href="#">Não é cadastrado?</a>
                </form>
            </div>
        </div>
    )
} 
export default Login;