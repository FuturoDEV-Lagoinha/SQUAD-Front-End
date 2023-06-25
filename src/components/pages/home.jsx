import { useContext, useEffect, useState } from "react";
import { useProdutoContext } from "../contexts/ProdutoContext";
import { EstoqueContext } from "../contexts/estoqueContext";
import { useNavigate, useParams } from "react-router-dom";


const Home = () => {

    const { produtosList, setProdutosList, estoques, setEstoques, deletaProduto } = useProdutoContext();

    const {estoque, setEstoque, listaEstoques} = useContext(EstoqueContext);

    const filtraFilhotes = () => {
        return produtosList.filter(produto => {
            return produto.categoria === "filhote";
        })
    }

    const filtraAdultos = () => {
        return produtosList.filter(produto => {
            return produto.categoria === "adulto";
        })
    }

    const filtraGatos = () => {
        return produtosList.filter(produto => {
            return produto.animal === "gato";
        })
    }

    const filtraCachorros = () => {
        return produtosList.filter(produto => {
            return produto.animal === "cachorro";
        })
    }

    const params = useParams();

    const buscarEstoque = (id_estoque) => {
        fetch(`http://localhost:8080/estoque/${params.id_estoque}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => { return response.json() })
            .then((dadosDoEstoque) => { setEstoque(dadosDoEstoque) });
    }
    
    useEffect(() => {
        buscarEstoque();
    }, []); 

    const navigate = useNavigate();

    const editaProduto = (produto) => {
      navigate(`/produto/${produto.id}/edit`);
    }

/*     const [filter, setFilter] = useState([]);

    const selecionaEstoque = (produto) => {
        
        
    } */

/*     const filtraPorEstoque = () => {
        buscarEstoque().map(estoque => {
            produtosList.map(produto => buscarEstoque(produto.estoque));
        }

    } */

    const filhotes = filtraFilhotes().map(produto => (
    <div>
        <li id="filhote-lista" className="filhote-lista" key={produto.id}>ID: {produto.id}; Tipo de Produto: {produto.produto}; Animal: {produto.animal}; Categoria: {produto.categoria}</li>
    <button onClick={() => editaProduto(produto)}>Editar Produto</button>
    <button onClick={() => deletaProduto(produto)}>Apagar Produto</button>
    </div>
    ))

    const adultos = filtraAdultos().map(produto => <li id="adulto-lista" className="adulto-lista" key={produto.id}>ID: {produto.id}; Tipo de Produto: {produto.produto}; Animal: {produto.animal}; Categoria: {produto.categoria}</li>)

    const gatos = filtraGatos().map(produto => <li id="gato-lista" className="gato-lista" key={produto.id}>ID: {produto.id}; Tipo de Produto: {produto.produto}; 
    Animal: {produto.animal}; Categoria: {produto.categoria}</li>)

    const cachorros = filtraCachorros().map(produto => <li id="cachorro-lista" className="cachorro-lista" key={produto.id}>ID: {produto.id}; Tipo de Produto: {produto.produto}; Animal: {produto.animal}; Categoria: {produto.categoria}</li>);
    

 

    return (

        <div>
            {/* <div className="lista-por-estoque">
            <label>Estoque: </label>
            <select 
            value={estoque.id}
            key={estoque.id}
            placeholder="Selecione o Estoque"
            onChange={(evento) => setEstoques({estoque: evento.target.value})}>
                <option>...</option>
                {filter.map((estoque) => {
                    return <option value={estoque.id} key={estoque.id}>{estoque.nome}</option>
                })}
            </select>
            {filtraPorEstoque().map(produto => <li id="produtos-do-estoque" className="produtos-do-estoque" key={produto.id}>ID: {produto.id}; Tipo de Produto: {produto.produto}; 
                        Animal: {produto.animal}; Categoria: {produto.categoria}</li>)}
            </div> */}
            <div className="lista de produtos">
                <h2>DASHBOARD: LISTA DE PRODUTOS</h2>

                <p>FILHOTES</p>

                <ul>
                {filhotes}
                </ul>

                <p>ADULTOS</p>

                <ul>
                {adultos}
                </ul>

                <p>GATOS</p>

                <ul>
                {gatos}
                </ul>

                <p>CÃES</p>

                <ul>
                {cachorros}
                </ul>


            </div>
        </div>

    )
}

export default Home;