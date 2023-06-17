import React, {  useState, useEffect } from "react";
import "./produto.css";

const Produto = () => {

    const [produto, setProduto] = useState({
        estoque: "",
        produto: "",
        animal: "",
        quantidade: "",
        categoria: "",
    })

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

    const listaProdutos = () => {
        fetch(`http://localhost:8080/produto`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoProduto) => {console.log(dadosDoProduto)});
        
    }
    
    useEffect(() => {
        listaProdutos();
    }, []);

    console.log(estoque);


    const atualizaProduto = (idDoProduto, dadosDoProduto) => {
        fetch(`hppt://localhost:8080/produto/${idDoProduto}`,{
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(dadosDoProduto),
        });
    }


    const deletaProduto = (idDoProduto) => {
        fetch(`http://localhost:8080/produto/${idDoProduto}`,{
            method: "DELETE",
        });
    }

    return(
        <div className="cadastro-produto">

            <h3>Cadastro de Produto</h3>
            
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
                <option value={"cachorro"}>Cachorro</option>
                <option value={"gato"}>Gato</option>
            </select>

            <label>Categoria: </label>
            <select
            value={produto.categoria}
            onChange={(evento) => setProduto({...produto, categoria: evento.target.value})}
            > 
                <option value={"filhote"}>Filhote</option>
                <option value={"adulto"}>Adulto</option>
            </select>
            
            <button onClick={adicionaProduto}>Confirmar Cadastro de Produto</button>

            <div className="lista-de-produtos">
                <ul>
                    <li>
                    {listaProdutos}
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Produto;


