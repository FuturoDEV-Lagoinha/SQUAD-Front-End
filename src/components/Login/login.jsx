import React, { useState } from "react";


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
                <img src="" alt="foto de cães e gatos" />
            </div>
            <div className="formulario-login">
                <form>
                    <img src="" alt="logo ilustração de patinhas de pets" />
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