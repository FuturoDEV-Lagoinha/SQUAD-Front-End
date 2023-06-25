import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/login";
import Estoque from "./components/Estoque/estoque";
import Produto from "./components/Produto/produto";
import ProdutoEdit from "./components/ProdutoEdit/produtoEdit";
import Cadastro from "./components/Cadastro/cadastro";
import Home from "./components/pages/home";
import Navbar from "./components/Navbar/Navbar";
import EstoqueEdit from "./components/Estoque/estoqueEdit";


const AppRoutes = () => {


    return (
        <BrowserRouter>
                <div className="navbar"><Navbar /></div>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/estoque" element={<Estoque />}/>
                <Route path="/estoque/:id_estoque/edit" element={<EstoqueEdit />}/>
                <Route path="/produto" element={<Produto/>} />
                <Route path="/produto/:id/edit" element={<ProdutoEdit />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;