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

    const acessaIdProduto = (idDoProduto) => {
        fetch(`http://localhost:8080/produto/${idDoProduto}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoProduto) => {setProdutos(dadosDoProduto)});
    }

    const editaProduto = (idDoProduto, dadosDoProduto) => {
        fetch(`hppt://localhost:8080/produto/${idDoProduto}`,{
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(dadosDoProduto),
        }).then(() => {
            listaProdutos();
          });
    }


    const deletaProduto = (idDoProduto) => {
        fetch(`http://localhost:8080/produto/${idDoProduto}`,{
            method: "DELETE",
        })
        .then(() => {
            listaProdutos();
          });
    }


    return(
        <div>
            <h3>Lista de Produtos</h3>

            {produtos.map((produto) => (
                <div>
                    <ul>
                        <li key={produto.id}>{produto.produto}</li>
                        <li>{produto.animal}</li>
                        <li>{produto.categoria}</li>
                        <li>{produto.quantidade}</li>
                        <button 
                        /* onClick={() => acessaIdProduto(produto.id)} */
                        onClick={() => editaProduto(produto)}>Editar Produto</button>
                        <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>

                    </ul>
                </div>
            ))}

        </div>
    )
}

export default ProdutosList;