import React, {  useContext, useEffect, useState } from "react";
import "../ProdutosList/produtosList.css";
import { useNavigate } from "react-router-dom";
import { ProdutoContext } from "../contexts/ProdutoContext";

const ProdutosList = () => {


    const {produtosList, deletaProduto} = useContext(ProdutoContext);


/*      const listaProdutos = () => {
        fetch(`http://localhost:8080/produto`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoProduto) => {setProdutos(dadosDoProduto)});
    } */

    const navigate = useNavigate();

    const editaProduto = (produto) => {
        navigate(`/produto/${produto.id}/edit`);
      }

    return(
        <div>
            <h3 className="lista">Lista de Produtos</h3>

            {produtosList.map((produto) => (
                <div className="produtos-cartoes">
                    <ul> 
                        <li className="produto-card" key={produto.id}>{produto.produto}</li>
                        <li>{produto.animal}</li>
                        <li>{produto.categoria}</li>
                        <li>{produto.quantidade}</li>
                        <button 
                        onClick={() => editaProduto(produto)}>Editar Produto</button>
                        <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>

                    </ul>
                </div>
            ))}

        </div>
    )
}

export default ProdutosList;

// onClick={() => setShowEditProduto(true) && {/* <EditProduto /> */}}