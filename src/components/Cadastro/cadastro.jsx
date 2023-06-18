import React from "react";
//import Logo from "./assets/logo.png"
import {FaEnvelope } from 'react-icons/fa';

const Cadastro = () => {
    return(
        <div className="cadastro">
            <div>
                <img src="" alt="foto de um cão filhote" />
            </div>
            <div>
                <img src="" alt="ilustração de patinhas de pets" />
                <p>Cadastro</p>
                <input type="text" placeholder="Nome" />
                {/* <input><FaEnvelope/></input> */}
                <input type="text" placeholder="Senha"/>
                <button>Cadastrar</button>
            </div>
        </div>
    )
}
export default Cadastro;