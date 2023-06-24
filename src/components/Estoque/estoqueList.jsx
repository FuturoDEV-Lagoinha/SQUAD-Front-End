import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EstoqueList = ({ estoques }) => {

    //<Button text="Editar" />
    //<button type="text" onClick={() => atualizarEstoque(estoque)}>Editar</button>

    const navigate = useNavigate();

    const editaEstoque = (estoque) => {
        navigate(`/estoque/${estoque.id}/edit`);
    }

    return (

        <div>
            <h3>Armazenamento de cadastro</h3>
            {
                estoques.map((estoque) => (
                    <div key={estoque.id}>
                        <ul>
                            <li>{estoque.nome}</li>
                            <li>{estoque.animal}</li>
                        </ul>
                        <button onClick={() =>editaEstoque (estoque)}>Editar</button>
                        <button >Deletar</button>
                    </div>
                ))
            }
        </div>
    )
}
export default EstoqueList;