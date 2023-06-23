import React, {  useEffect, useState } from "react";
import EditProduto from "../EditProduto/editProduto";
import { useProdutoContext, ProdutoProvider } from "../contexts/ProdutoContext";
import "../ProdutosList/produtosList.css";
import ProdutoEdit from "../ProdutoEdit/produtoEdit";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    const editaProduto = (produto) => {
        navigate(`/produto/${produto.id}/edit`);
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
            <h3 className="lista">Lista de Produtos</h3>

            {produtos.map((produto) => (
                <div className="produtos-cartoes">
                    <ul>
                        <li className="produto-card" key={produto.id}>{produto.produto}</li>
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

// onClick={() => setShowEditProduto(true) && {/* <EditProduto /> */}}