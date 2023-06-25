import { useProdutoContext } from "../contexts/ProdutoContext";
import "./home.css"


const Home = () => {

    const { produtosList } = useProdutoContext();


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

    return (

        <div>
            <div className="lista-de-estoques">
                <h2>DASHBOARD: LISTA DE PRODUTOS</h2>
                <p>FILHOTES</p>
                <div  className="lista-de-estoques">
                <ul>
                {filtraFilhotes().map(produto => <li id="filhote" className="filhote-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto} 
                       <span>Animal: </span>{produto.animal} <span>Categoria:</span> {produto.categoria}</li>)}
                </ul>

                <p>ADULTOS</p>

                <ul>
                {filtraAdultos().map(produto => <li id="adulto" className="adulto-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto} 
                    <span>Animal:</span> {produto.animal} <span>Categoria:</span> {produto.categoria}</li>)}
                </ul>

                <p>GATOS</p>

                <ul>
                {filtraGatos().map(produto => <li id="gato" className="gato-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto} 
                    <span>Animal:</span> {produto.animal} <span>Categoria:</span> {produto.categoria}</li>)}
                </ul>

                <p>CÃES</p>

                <ul>
                {filtraCachorros().map(produto => <li id="cachorro" className="cachorro-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto} 
                    <span>Animal:</span> {produto.animal} <span>Categoria:</span> {produto.categoria}</li>)}
                </ul>
                </div>

            </div>
        </div>

    )
}

export default Home;