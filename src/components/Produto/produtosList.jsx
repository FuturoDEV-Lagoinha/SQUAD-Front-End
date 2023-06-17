import React, {  useState, useEffect } from "react";




const ProdutosList = () => {


    const [produtos, setProdutos] = useState([]);

    const listaProdutos = () => {
        fetch(`http://localhost:8080/produto`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoProduto) => {setProdutos(dadosDoProduto)});
    }
    
    useEffect(() => {
        listaProdutos();
    }, []);

    return(
        <div>
            <h3>Lista de Produtos</h3>

            {produtos.map((produto) => (
                <div>
                    <ul>
                        <li key={produto.id}>{produto.produto}</li>
                        <li>{produto.quantidade}</li>
                        <li>{produto.categoria}</li>
                        <li>{produto.animal}</li>
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default ProdutosList;