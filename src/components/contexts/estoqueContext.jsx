import { createContext, useState } from "react";

const EstoqueContext = createContext();

const EstoqueProvider = ({ children }) =>{
    const [estoque, setEstoque] = useState({
        nome: "",
        animal: ""
    });

    const [estoques, setEstoques] = useState([]);

    const ListarEstoques = ( ) => {

        fetch('http://localhost:8080/estoque', {
        method: "GET"
        }).then((estoque) =>{
        return estoque.json();
        }).then((response) => setEstoques(response));
    };


    return(
    <EstoqueContext.Provider value={ {estoque, setEstoque, ListarEstoques, estoques} }>
        {children}
    </EstoqueContext.Provider>

    )
    
}
export {
    EstoqueProvider,
    EstoqueContext
}