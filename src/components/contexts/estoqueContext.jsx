import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EstoqueContext = createContext();

const EstoqueProvider = ({ children }) => {

    const [estoque, setEstoque] = useState({
        nome: "",
        animal: ""
    });
    
    //const params = useParams();

    const [estoques, setEstoques] = useState([]);
    
    const listarEstoques = () => {

        fetch('http://localhost:8080/estoque', {
            method: "GET"
        }).then((estoque) => {
            return estoque.json();
        }).then((response) => setEstoques(response));
    };

    useEffect(() => {
        listarEstoques();
    }, []);

    
    //salvando Estoque
    const adicionarEstoque = () => {

        fetch(`http://localhost:8080/estoque`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estoque),
        }).then(() =>{
            listarEstoques();
        })
        
    };

    return (
        <EstoqueContext.Provider value={{
            estoque,
            setEstoque,
            listarEstoques,
            estoques,
            setEstoques,
            adicionarEstoque
            }}>
            {children}
        </EstoqueContext.Provider>

    )

}
export {
    EstoqueProvider,
    EstoqueContext
}