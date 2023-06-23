import { createContext, useState, useContext, useEffect } from "react";

const ProdutoContext = createContext();

const ProdutoProvider = ({ children }) => {
  const [produtosList, setProdutosList] = useState([]);

  const ListaProdutos = () => {
    useEffect(() => {
      async function carregaProdutos() {
        const response = await
          fetch(`http://localhost:8080/produto`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => { return response.json() })
            .then((dadosDoProduto) => { setProdutosList(dadosDoProduto) });
        const produtos = await response.json();
        return produtos;
      }
      carregaProdutos();
    }, []);
  }

  const [produto, setProduto] = useState({
    estoque: "",
    produto: "",
    animal: "",
    quantidade: "",
    categoria: "",
});

    return (
      <ProdutoContext.Provider value={{ produtosList, setProdutosList, ListaProdutos, produto, setProduto }}>
        {children}
      </ProdutoContext.Provider>
    )
  }

  const useProdutoContext = () => {
    return useContext(ProdutoContext)
  }

  export {
    ProdutoProvider,
    useProdutoContext,
  }