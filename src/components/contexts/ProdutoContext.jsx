import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const ProdutoContext = createContext();

const ProdutoProvider = ({ children }) => {
  
  const [produto, setProduto] = useState({
    estoque: "",
    produto: "",
    animal: "",
    quantidade: "",
    categoria: "",
  });
  
  const [produtosList, setProdutosList] = useState([]);

  const listaProdutos = () => {
    fetch(`http://localhost:8080/produto`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {return response.json()})
    .then((dadosDoProduto) => {setProdutosList(dadosDoProduto)});
}

useEffect(() => {
    listaProdutos();
}, []);



const deletaProduto = (idDoProduto) => {
  fetch(`http://localhost:8080/produto/${idDoProduto}`,{
      method: "DELETE",
  })
  .then(() => {
      listaProdutos();
    });
}


    return (
      <ProdutoContext.Provider value={{ produtosList, setProdutosList, produto, setProduto, listaProdutos, deletaProduto }}>
        {children}
      </ProdutoContext.Provider>
    )
  }

  /* const useProdutoContext = () => {
    return useContext(ProdutoContext)
  } */

  export {
    ProdutoProvider,
    ProdutoContext,
    //useProdutoContext,
  }