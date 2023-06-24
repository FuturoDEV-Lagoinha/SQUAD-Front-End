import React, { useContext } from "react";
import { ProdutoContext } from "../contexts/ProdutoContext";


const Home = () => {

    
    const { produtosList, setProdutosList } = useContext(ProdutoContext);

    const filtraGatos = () => {
        const gatos = produtosList.filter(produto => {
            return produto.animal == "gato";
        })
        setProdutosList(gatos);
    }

    const filtraCachorros = () => {
        const cachorros = produtosList.filter(produto => {
            return produto.animal == "cachorro";
        })
        setProdutosList(cachorros);
    }

    const filtraFilhotes = () => {
        const filhotes = produtosList.filter(produto => {
            return produto.categoria == "filhote";
        })
        setProdutosList(filhotes);
    }

    const filtraAdultos = () => {
        const adultos = produtosList.filter(produto => {
            return produto.categoria == "adulto";
        })
        setProdutosList(adultos);
    }

    return(

        <div>
            <div className="lista de estoques">
                <h2>Lista de Estoques</h2>
                <p>"lista de estoques aqui" - CONTEXT</p>
                <p1>"mostrar produtos nos estoques também"</p1>
                <p>FILHOTES</p>
                <ul>
                    {/* <li>{filtraFilhotes}</li> */}
                    <li>{produtosList.map(produto => {
                        return <li>{produto.id}{produto.produto}{produto.animal}{produto.categoria}</li>
                        
                    })}</li>
                </ul>
                <p>ADULTOS</p>
                <ul>
                    {/* <li>{filtraAdultos}</li> */}
                </ul>
                <p>GATOS</p>
                <ul>
                    {/* <li>{filtraGatos}</li> */}
                </ul>
                <p>CÃES</p>
                <ul>
                    {/* <li>{filtraCachorros}</li> */}
                </ul>

            </div>
        </div>
       
    )
}

export default Home;