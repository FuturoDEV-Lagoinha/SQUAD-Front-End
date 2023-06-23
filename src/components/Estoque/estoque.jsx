
import React, { useEffect, useState } from "react";
import EstoqueList from "./estoqueList";

const Estoque = () => {
    const [estoque, setEstoque] = useState({
        nome: "",
        animal: ""
    });
   
    //estado que recebe os valores do estoque
    const [estoques, setEstoques] = useState([]);
    

    const listarEstoques = ( ) => {

        fetch('http://localhost:8080/estoque', {
        method: "GET"
        }).then((estoque) =>{
        return estoque.json();
        }).then((response) => setEstoques(response));
    };

    //event.preventDefault(); ??

    //salvando Estoque
    const adicionarEstoque = () => {

        fetch(`http://localhost:8080/estoque`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estoque),
        }).then(()  =>{
            listarEstoques();
        });
    };
    useEffect(() =>{
        listarEstoques();
    }, []);

    //criando funcao para editar estoque 
    const atualizarEstoque = (estoque, dadosDoEstoque) => {
        fetch(`http://localhost:8080/estoque/${estoque.id}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosDoEstoque),
        }).then(() =>{
            listarEstoques();
        });
    };

    
    return(
        <div>
            <h3>Cadastro de Armazenamento</h3>
            <label htmlFor="">Nome:</label>
            <input
                type="text"
                value={estoque.nome}
                placeholder="Nome estoque"
                onChange={(evento) => setEstoque({...estoque,  nome: evento.target.value})}
            />
            
            
            <label htmlFor="">Estoque para:</label>
            <select
                type="text"
                value={estoque.animal}
                onChange={(evento) => setEstoque({...estoque, animal: evento.target.value})}
            >
                <option value="">...</option>
                <option value={"gato"}>Gato</option>
                <option value={"cachorro"}>Cachorro</option>
            </select>                
            
            <button onClick={adicionarEstoque} >Cadastrar</button>
            
            <EstoqueList estoques={estoques} listarEstoques={listarEstoques} />
           
        </div>
    )
}
export default Estoque;