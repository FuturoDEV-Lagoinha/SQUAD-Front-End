import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EstoqueContext } from "../contexts/estoqueContext";

const EstoqueEdit = () => {

    //trazando o contexto para essa pagina
    const {estoque, setEstoque, atualizarEstoque } = useContext(EstoqueContext);

    const navigate = useNavigate();

    const params = useParams();

    const voltarPagina = (estoque) => {
        navigate(`/estoque`);
    }
    
    const buscarEstoque = (id) => {

        fetch(`http://localhost:8080/estoque/${params.id}`, {
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




    return(
        <div>
            <h3>Editar de Armazenamento</h3>
            <label htmlFor="">Nome:</label>
            <input
                type="text"
                value={estoque.nome}
                placeholder="Nome estoque"
                onChange={(evento) => setEstoque({...estoque,  nome: evento.target.value})}
            />
            
            
            <label htmlFor="">Estoque para:</label>
            <select
                type="select"
                value={estoque.animal}
                onChange={(evento) => setEstoque({...estoque, animal: evento.target.value})}
            >
                <option value="">...</option>
                <option value={"gato"}>Gato</option>
                <option value={"cachorro"}>Cachorro</option>
            </select>                
            
            <button onClick={ atualizarEstoque && voltarPagina }>Editar</button>    
           
        </div>
    )
}
export default EstoqueEdit;
