import React, { useState } from "react";

const Estoque = () => {
    const [estoque, setEstoque] = useState([]);

      //FUNÇAO PARA ADICIONAR USUARIO A LISTA 
      const adicionarEstoque = (newAdicionar) => {
        setEstoque([...estoque, newAdicionar]);
    }

    return(
        <div>
            <h3>Cadastro de Armazenamento</h3>
            <input
                type="text"
                value={""}
                placeholder="Nome estoque"
                onChange={(evento) => setEstoque(evento.target.value)}
            />

            <button onClick={() => adicionarEstoque(estoque)} >Cadastrar</button>


        </div>
    )
}
export default Estoque;