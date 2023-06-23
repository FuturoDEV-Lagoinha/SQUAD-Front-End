
import React, { useState } from "react";
import EstoqueList from "./estoqueList";

const Estoque = () => {
    const [estoque, setEstoque] = useState({
        nome: "",
        animal: ""
    });
    //const [animal, setAnimal] = useState();
    const [nome, setNome] = useState("");
    const [estoques, setEstoques] = useState([]);

      {/*/FUNÇAO PARA ADICIONAR USUARIO A LISTA 
      const adicionarEstoque = () => {
        setNomes([...nomes, nome]);
        setNome("");
    }*/}

    const adicionarEstoque = () => {

        //event.preventDefault(); ???

        fetch(`http://localhost:8080/estoque`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estoque),
        });
        console.log(estoque);
        //setEstoques([...estoques, estoque]);
        setNome("");
    }


    return(
        <div>
            <h3>Cadastro de Armazenamento</h3>
            <label>Nome:</label>
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
            
            

            <EstoqueList estoques={estoques} />
           
        </div>
    )
}
export default Estoque;