import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/login";
import Estoque from "./components/Estoque/estoque";
import Produto from "./components/Produto/produto";
import Cadastro from "./components/Cadastro/cadastro";
import EstoqueEdit from "./components/Estoque/estoqueEdit";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/estoque" element={<Estoque />}/>
                <Route path="/estoque/:id/edit" element={<EstoqueEdit />}/>
                <Route path="/produto" element={<Produto/>} />
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;