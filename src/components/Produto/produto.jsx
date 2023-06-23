import React, { useState, useEffect } from "react";
import "./produto.css";
import ProdutosList from "../ProdutosList/produtosList";
//import { ProdutoProvider, useProdutoContext } from "../contexts/ProdutoContext";

const Produto = () => {

    const [produto, setProduto] = useState({
        estoque: "",
        produto: "",
        animal: "",
        quantidade: "",
        categoria: "",
    });

    const [produtos, setProdutos] = useState([]);

    const adicionaProduto = () => {
        fetch(`http://localhost:8080/produto`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        });
        console.log(produto);
    }

    const [estoque, setEstoque] = useState([])

    const listaEstoques = () => {
        fetch(`http://localhost:8080/estoque`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoEstoque) => {setEstoque(dadosDoEstoque)});
    }

    useEffect(() => {
        listaEstoques();
    }, []); 

    console.log(estoque);

    return(
        <div className="cadastro-produto">

            <h3>Cadastro de Produto</h3>
            <form>

            <label>Estoque: </label>
            <select 
            value={produto.estoque}
            onChange={(evento) => setProduto({...produto, estoque: evento.target.value})}>
                {estoque.map((armazem) => {
                    return <option value={armazem.id} key={armazem.id}>{armazem.nome}</option>
                })}
            </select>
            
            <label>Tipo do Produto: </label>
            <select
            value={produto.produto} 
            onChange={(evento) => setProduto({...produto, produto: evento.target.value})}
            >
                <option>...</option>
                <option value={"ração"}>Ração</option>
                <option value={"antipulgas"}>Antipulgas</option>
                <option value={"antiparasitária"}>Antiparasitária</option>
            </select>

            <label>Quantidade: </label>
            <input
                type="number"
                value={produto.quantidade}
                placeholder="Quantidade do Produto"
                onChange={(evento) => setProduto({...produto, quantidade: evento.target.value})}
            />

            <label>Animal: </label>
            <select
            value={produto.animal} 
            onChange={(evento) => setProduto({...produto, animal: evento.target.value})}
            > 
                <option>...</option>
                <option value={"cachorro"}>Cachorro</option>
                <option value={"gato"}>Gato</option>
            </select>

            <label>Categoria: </label>
            <select
            value={produto.categoria}
            onChange={(evento) => setProduto({...produto, categoria: evento.target.value})}
            > 
                <option>...</option>
                <option value={"filhote"}>Filhote</option>
                <option value={"adulto"}>Adulto</option>
            </select>
            
            <button type="button" onClick={adicionaProduto}>Confirmar Cadastro de Produto</button>

            </form>
            <div className="lista-de-produtos">
                <ProdutosList produtos={produtos}/>
            </div>


        </div>
    )
}

export default Produto;


