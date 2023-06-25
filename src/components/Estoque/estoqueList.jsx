import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EstoqueContext } from "../contexts/estoqueContext";

const EstoqueList = () => {

    const context = useContext(EstoqueContext);
    
    const navigate = useNavigate();

    const editaEstoque = (estoque) => {
        navigate(`/estoque/${estoque.id}/edit`);
    }

    return (

        <div className="listaEstoque">
            <h3>Armazenamento de cadastro</h3>
            {
                context.estoques.map((estoque) => (
                    <div key={estoque.id}>
                        <ul>
                            <li>{estoque.nome}</li>
                            <li>{estoque.animal}</li>
                        </ul>
                        <button onClick={() => editaEstoque(estoque)}>Editar</button>
                        <button >Deletar</button>
                    </div>
                ))
            }
        </div>
    )
}
export default EstoqueList;