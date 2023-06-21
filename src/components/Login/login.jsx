import React, { useState } from "react";
import login from '../../assets/login.jpg';
import logo from '../../assets/logo.png';


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
            <div className="formulario-login">
                <form>
                    <img src={logo} alt="logo ilustração de patinhas de pets" />
                    <h2>DEVIN - ADOÇÃO</h2>
                    <span>Seja bem vindo</span>

                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Senha"/>
                    <button>Entrar</button>
                    <a href="#">Não é cadastrado?</a>
                </form>
            </div>
        </div>
    )
} 
export default Login;