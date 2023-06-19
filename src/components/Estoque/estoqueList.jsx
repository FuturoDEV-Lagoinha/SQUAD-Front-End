import React, { useEffect, useState } from "react";

const EstoqueList = () => {

    const[estoques, setEstoques] = useState([]);

    const listaEstoques = () => {
        fetch(`http://localhost:8080/estoque`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoEstoque) => {setEstoques(dadosDoEstoque)});
    }

    useEffect(() => {
        listaEstoques();
    }, []);

    return(

        <div> 
            <h3>Armazenamento de cadastro</h3>
            { 
                estoques.map((estoque) =>(
                    <div>

                        <ul>
                            <li key={estoque.id}>{estoque.nome}</li>
                            <li key={estoque.id}>{estoque.animal}</li>
                            <button>Editar</button>
                            <button>Deletar</button>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
export default EstoqueList;