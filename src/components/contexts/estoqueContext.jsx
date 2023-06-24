import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EstoqueContext = createContext();

const EstoqueProvider = ({ children }) => {

    const [estoque, setEstoque] = useState({
        nome: "",
        animal: ""
    });
    
    const params = useParams();

    const [estoques, setEstoques] = useState([]);
    
    const ListarEstoques = () => {

        fetch('http://localhost:8080/estoque', {
            method: "GET"
        }).then((estoque) => {
            return estoque.json();
        }).then((response) => setEstoques(response));
    };

    useEffect(() => {
        ListarEstoques();
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
            ListarEstoques();
        })
        /* console.log(params.id);
        console.log(estoque); */
    };
    
    return (
        <EstoqueContext.Provider value={{
            estoque,
            setEstoque,
            ListarEstoques,
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